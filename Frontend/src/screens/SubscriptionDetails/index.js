import React, {useEffect, useState} from 'react';
import {Alert, Dimensions, View, Keyboard, ScrollView} from 'react-native';
import {
  CardField,
  StripeProvider,
  confirmPayment,
  presentPaymentSheet,
  usePlatformPay,
  PlatformPayButton,
  PlatformPay,
} from '@stripe/stripe-react-native';
import Button from '../../component/Button';
import Header from '../../component/Header';
import Card from '../../component/Card';
import {GetApi, PostApi} from '../../services/postServices';
import {
  GET_SUB_DETAILS_ID,
  INITIAL_PAYMENT_API,
  STATUS_API,
} from '../../constants/Api';
import routeNames from '../../constants/routeNames';
import {useNavigation} from '@react-navigation/native';
import {getData} from '../../Authcontext/Async';
import styles from './style';
import {useTranslation} from 'react-i18next';
import {useAuth} from '../../Authcontext/AuthContext';

const SubscriptionDetails = ({navigation}) => {
  const {isPlatformPaySupported, confirmPlatformPayPayment} = usePlatformPay();
  const {t} = useTranslation();
  const [email, setEmail] = useState('a@gmail.com');
  const [cardData, setCardData] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const {logout} = useAuth();
  const screenWidth = Dimensions.get('window').width;
  const {navigate} = useNavigation();

  const handleIconPress = () => {
    navigation.goBack();
  };

  const handlePayPress = async () => {
    try {
      const sub_id = await getData('sub_id');
      const response = await PostApi(INITIAL_PAYMENT_API, {
        amount: cardData.price,
        subscription_id: sub_id,
      });
      console.log('response',response,cardData);
      
      const client_secret = await response.client_secret;
      setClientSecret(client_secret);

      const paymentIntent = await confirmPayment(client_secret, {
        paymentMethodType: 'Card',
        billingDetails: {email},
      });
      console.log('statusResponse', paymentIntent);

      const check_payment = await PostApi(STATUS_API, {
        paymentIntentId: paymentIntent.paymentIntent.id,
        status: paymentIntent.paymentIntent.status,
      });


      await presentPaymentSheet({clientSecret: clientSecret});

      if (paymentIntent.paymentIntent.status === 'Succeeded') {
        navigate(routeNames.PACKAGESUCCESS);
      } else {
        navigate(routeNames.PACKAGEERROR);
      }
    } catch (error) {
      navigate(routeNames.PACKAGEERROR);
      console.error('Error creating payment method:', error);
    }
  };

  const openPaymentSheet = async () => {
    if (clientSecret) {
      try {
        await presentPaymentSheet({clientSecret: clientSecret});
      } catch (error) {
        console.error('Error opening payment sheet:', error);
      }
    } else {
      console.warn('Client secret is not available.');
    }
  };

  useEffect(() => {
    const fetchSubscriptionDetailsById = async () => {
      try {
        const storedToken = await getData('Token');
        const sub_id = await getData('sub_id');
        const response = await GetApi(GET_SUB_DETAILS_ID + sub_id);
        setCardData(response.details);
        if (response instanceof Error) {
          if (response.response && response.response.status === 401) {
            logout();
          }
          throw response;
        }
      } catch (error) {
        console.error('Error calling API:', error);
      }
    };
    fetchSubscriptionDetailsById();
  }, []);

  const payWithGooglePay = async () => {
    try {
      const sub_id = await getData('sub_id');
      const response = await PostApi(INITIAL_PAYMENT_API, {
        amount: cardData.price,
        subscription_id: sub_id,
      });
      const client_secret = await response.client_secret;
      setClientSecret(client_secret);

      const {error} = await confirmPlatformPayPayment(client_secret, {
        googlePay: {
          testEnv: true,
          merchantName: 'My merchant name',
          merchantCountryCode: 'US',
          currencyCode: 'USD',
          billingAddressConfig: {
            format: PlatformPay.BillingAddressFormat.Full,
            isPhoneNumberRequired: true,
            isRequired: true,
          },
        },
      });

      if (error) {
        Alert.alert(error.code, error.message);
        return;
      }

      await presentPaymentSheet({clientSecret: client_secret});
    } catch (error) {
      console.error('Error processing Google Pay:', error);
    }
  };

  return (
    <StripeProvider publishableKey="pk_test_51OzCm8DMklUzIAKIxubrgwFVH2wcJJ7PJDm4cFBVALZw33t3q50hOYSVB6wBpFDfroqdG42lKiCxlo9wN7GH429i00X6hDgw6m">
        <ScrollView style={{height: '100%'}}>
        <Header onIconPress={handleIconPress} />
        <Card
          backgroundColor={cardData.color_code}
          timeDuration={cardData.months + ' Month'}
          cost={cardData.price}
          currency="$"
          contentlineone={cardData.description}
          planName={cardData.plan_name}
        />
        <View style={styles.container}>
          <CardField
            postalCodeEnabled={false}
            placeholder={{
              number: '4242 4242 4242 4242',
            }}
            cardStyle={{
              backgroundColor: '#F2F2F2',
              borderRadius: 10,
              borderWidth: 1,
              borderColor: '#CCCCCC',
              textColor: 'black',
            }}
            style={{
              width: screenWidth * 0.9,
              height: 50,
              marginVertical: 30,
            }}
            keyboardType="numeric"
            returnKeyType="done"
            autofocus={true}
            onSubmitEditing={Keyboard.dismiss}
          />
          {/* <PlatformPayButton
            type={PlatformPay.ButtonType.Pay}
            onPress={payWithGooglePay}
            style={{
              width: '90%',
              height: 50,
            }}
          /> */}
        </View>

        <Button
          title={t('Payment amount ') + '$ '+  cardData.price  }
          onPress={handlePayPress}
          imageSource={constant.imagePath.nextarrow}
        />
    </ScrollView>
      </StripeProvider>
    
  );
};

export default SubscriptionDetails;
