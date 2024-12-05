import React, {useEffect, useState} from 'react';
import {View, ScrollView} from 'react-native';
import styles from './style';
import Header from '../../component/Header';
import HeadingText from '../../component/HeadingText';
import SecondaryText from '../../component/SecondaryText';
import {useNavigation} from '@react-navigation/native';
import routeNames from '../../constants/routeNames';
import {SUBSCRIPTION_API, SUB_CHECK} from '../../constants/Api';
import axios from 'axios';
import {getData, storeData} from '../../Authcontext/Async';
import CardContainer from '../../component/Card';
import {GetApi, PostApi} from '../../services/postServices';
import {useAuth} from '../../Authcontext/AuthContext';

const SubScription = ({navigation}) => {
  const {navigate} = useNavigation();
  const {logout} = useAuth();

  const [CardData, setCardData] = useState([]);

  const handleIconPress = () => {
    navigation.goBack();
  };
  useEffect(() => {
    const subscriptiondetails = async () => {
      try {
        const response = await GetApi(SUBSCRIPTION_API);
        setCardData(response.data);

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
    subscriptiondetails();
  }, []);

  const cardHandle = async () => {
    try {
      const response = await PostApi(SUB_CHECK, {
        subscription_id: 0,
      });

      if (response instanceof Error) {
        if (response.response && response.response.status === 401) {
          logout();
        }
        throw response;
      }
    } catch (error) {
      console.error('Error fetching filtered data:', error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Header onIconPress={handleIconPress} />
      <HeadingText title={'Subscriptions'} />
      <SecondaryText
        secondTitle={
          'Please subscribe to one of the packages to get all the features inside the application'
        }
      />
      {CardData.map((card, index) => (
        <CardContainer
          key={index}
          timeDuration={card.months + ' Month '}
          cost={card.price}
          currency="$"
          contentlineone={card.description}
          planName={card.plan_name}
          backgroundColor={card.color_code}
          onPress={() => {
            storeData('sub_id', card.id);
            cardHandle();
            navigate(routeNames.SUBSCRIPTIONDETAILS);
          }}
        />
      ))}
    </ScrollView>
  );
};

export default SubScription;
