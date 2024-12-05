import React, {useEffect} from 'react';
import {View, Image} from 'react-native';
import constant from '../../constants/constant';
import {useNavigation} from '@react-navigation/native';
import styles from './style';
import routeNames from '../../constants/routeNames';

const SplashScreen = () => {
  const {navigate} = useNavigation ();

  useEffect(() => {
    const timer = setTimeout(() => {
     
      navigate(routeNames.AGREETERMSCONDITION);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <View style={styles.container}>
        <Image source={constant.imagePath.splashscreen} style={styles.image} />
      </View>
    </>
  );
};
export default SplashScreen;
