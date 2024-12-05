import React from 'react';
import {View} from 'react-native';
import styles from './style';
import SupportCard from '../../component/SupportCard';
import constant from '../../constants/constant';
import SupportHeader from '../../component/SupportHeader';
import routeNames from '../../constants/routeNames';
import {useNavigation} from '@react-navigation/native';

const Support = ({navigation}) => {
  const {navigate} = useNavigation();
  const handleIconPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <SupportHeader
        heading="Support"
        bigheader={true}
        onPressLeftIcon={handleIconPress}
        showHeadingText={true}
      />

      <View style={styles.user}>
        <SupportCard
          source={constant.imagePath.email}
          Name={'Ahmed'}
          Information={'ahmend@gmail.com'}
          IconName={'mail'}
        />

        <SupportCard
          onPress={() => {
            navigate(routeNames.REPORTPROBLEM);
          }}
          rightIcon={constant.imagePath.rightminiarrow}
          source={constant.imagePath.yellowerror}
          Name={'Report Problem'}
          Information={'You have a problem or a complainet send to us'}
          IconName={'alert-circle'}
        />
      </View>
    </View>
  );
};

export default Support;
