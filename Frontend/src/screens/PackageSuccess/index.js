import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './style';
import constant from '../../constants/constant';
import Header from '../../component/Header';
import Button from '../../component/Button';
import routeNames from '../../constants/routeNames';
import HeadingText from '../../component/HeadingText';
import SecondaryText from '../../component/SecondaryText';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';

const PackageSuccess = ({navigation}) => {
  const {navigate} = useNavigation();
  const {t, i18n} = useTranslation();
  
  const handleIconPress = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header onIconPress={handleIconPress} />
      </View>
      <View style={styles.img}>
        <Image source={constant.imagePath.Sucess} />
        <View style={styles.text}>
          <HeadingText title={t('Success')} />
        </View>
        <View style={styles.text}>
          <SecondaryText
            introsecondarytitle={t(
              'Successfully subscribe and you can browse the app and enjoy the services',
            )}
          />
        </View>
        <View style={styles.text}>
          <Text style={{color: 'green'}}>
            {t('Your subscription detail will be updated after 10 minutes')}
          </Text>
        </View>
      </View>
      <Button
        title={t('Browse the app')}
        onPress={() => {
          navigate(routeNames.VIEWPROFILE);
        }}
        imageSource={constant.imagePath.nextarrow}
      />
    </View>
  );
};

export default PackageSuccess;
