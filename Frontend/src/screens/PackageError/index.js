import React from 'react';
import {View, Image} from 'react-native';
import styles from './style';
import constant from '../../constants/constant';
import Header from '../../component/Header';
import Button from '../../component/Button';
import routeNames from '../../constants/routeNames';
import HeadingText from '../../component/HeadingText';
import SecondaryText from '../../component/SecondaryText';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';


const PackageError = ({navigation}) => {
  const {navigate} = useNavigation()
  const {t, i18n} = useTranslation();

  const handleIconPress = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <Header
        onIconPress={handleIconPress}
      />
      <View style={styles.img}>
        <Image source={constant.imagePath.failed} />

        <View style={styles.text}>
          <HeadingText title={t("Sorry")} />
        </View>
        <View style={styles.text}>
          <SecondaryText
            introsecondarytitle={t('Something went wrong, please try again')}
          />
        </View>
      </View>
      <Button
        title={t("Try again")}
        onPress={() => {
          navigate(routeNames.SUBSCRIPTIONDETAILS);
        }}
      />
    </View>
  );
};

export default PackageError;
