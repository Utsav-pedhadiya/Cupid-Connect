import React from 'react';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/Ionicons';
import {useTranslation} from 'react-i18next';
import i18next from 'i18next';
import Searchbar from '../Searchbar';

const HomeHeader = ({
  title,
  RightIcon,
  RightText,
  bigheader,
  heading,
  onPressRightText,
  onPressLeftIcon,
  onPressRightIcon,
  onChangeText,
  onSearchPress,
  onClearPress,
  searchValue
}) => {
  const {t} = useTranslation();
  const windowWidth = Dimensions.get('window').width;
  const screenWidth = Dimensions.get('window').width;
  const isRTL = i18next.language === 'ar';

  return (
    <View>
      {bigheader ? (
        <>
          <View style={[styles.container, {width: windowWidth}]}>
            <View
              style={[
                styles.main,
                {
                  flexDirection: isRTL ? 'row-reverse' : 'row',
                  alignItems: 'center',
                  marginHorizontal: screenWidth * 0.03,
                  justifyContent: 'space-between', // Add this to space out the title and icon
                },
              ]}>
              <Text
                style={[styles.text, {textAlign: isRTL ? 'right' : 'left'}]}>
                {t(title)}
              </Text>

              <TouchableOpacity onPress={onPressRightIcon}>
                <Icon name={RightIcon} size={40} color="red" />
              </TouchableOpacity>
            </View>

            {/* <View style={{alignItems: 'center', top: 20, width: '100%'}}>
              <Searchbar
                placeholder={'Search here...'}
                value={searchValue}
                onChangeText={onChangeText}
                onSearchPress={onSearchPress}
                onClearPress={onClearPress}
                containerStyle={{
                  width: windowWidth * 0.9, 
                }}
              />
            </View> */}
          </View>
        </>
      ) : (
        <View style={[styles.container2, {width: windowWidth}]}>
          <TouchableOpacity onPress={onPressLeftIcon}>
            <Icon
              name={RightIcon}
              size={30}
              color="black"
              style={styles.image2}
            />
          </TouchableOpacity>
          <Text style={styles.heading}>{t(heading)}</Text>

          <TouchableOpacity onPress={onPressRightText}>
            <Text style={styles.righttext}>{t(RightText)}</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default HomeHeader;
