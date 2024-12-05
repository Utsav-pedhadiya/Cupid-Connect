import React, {useRef} from 'react';
import {View, Image} from 'react-native';
import Swiper from 'react-native-swiper';
import SecondaryText from '../../component/SecondaryText';
import HeadingText from '../../component/HeadingText';
import Button from '../../component/Button';
import {useNavigation} from '@react-navigation/native';
import constant from '../../constants/constant';
import routeNames from '../../constants/routeNames';
import Header from '../../component/Header';
import styles from './style';

const IntroSlider = () => {
  const {navigate, goBack} = useNavigation();
  const swiperRef = useRef(null);

  const slides = [
    
    {
      id: 1,
      title: 'Please add your details',
      secondTitle: 'We need additional details to display in your profile',
      image: constant.imagePath.writedata,
    },
  ];

  const handleButtonClick = () => {
    if (swiperRef.current) {
      const currentIndex = swiperRef.current.state.index;
      if (currentIndex === 0) {
        navigate(routeNames.SIGNUPSCREENS);
      } else {
        swiperRef.current.scrollBy(1);
      }
    }
  };

  const handleBackSlide = () => {
    goBack();
  };

  return (
    <>
      <View style={styles.container}>
        <Header onIconPress={handleBackSlide} />
        <Swiper
          showsPagination={false}
          showsButtons={false}
          loop={false}
          ref={swiperRef}
          scrollEnabled={false}>
          {slides.map(slide => (
            <View key={slide.id} style={[styles.slide, {bottom: '5%'}]}>
              <Image source={slide.image} />
              <View style={styles.text}>
                <HeadingText title={slide.title} />
                <View style={{top: 20}}>
                  <SecondaryText introsecondarytitle={slide.secondTitle} />
                </View>
              </View>
            </View>
          ))}
        </Swiper>
        <Button
          title="Next"
          IconeName={'arrowright'}
          onPress={handleButtonClick}
        />
      </View>
    </>
  );
};

export default IntroSlider;
