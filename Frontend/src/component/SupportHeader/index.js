import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import style from './style';
import {getData} from '../../Authcontext/Async';
import axios from 'axios';
import {LIKE} from '../../constants/Api';
import {useTranslation} from 'react-i18next';
import i18next from 'i18next';

const SupportHeader = ({
  onPressLeftIcon,
  heading,
  showLikeButton,
  showHeadingText,
}) => {
  const {t, i18n} = useTranslation();
  const [likeColor, setLikeColor] = useState('black');

  const handleLikeClick = async () => {
    setLikeColor(likeColor === 'black' ? '#FC3876' : 'black');
    try {
      const storedToken = await getData('Token');
      const View_Profile_id = await getData('View_Profile_id');

      const response = await axios.get(LIKE + View_Profile_id, {
        headers: {
          Authorization: `Bearer ${storedToken}`,
        },
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const isRTL = i18next.language === 'ar';
  return (
    <View
      style={[style.container, {flexDirection: 'row'}]}>
      <TouchableOpacity onPress={onPressLeftIcon}>
        <Icon name="arrowleft" size={30} color="black" />
      </TouchableOpacity>
      {showHeadingText && <Text style={style.heading}>{t(heading)}</Text>}
      {showLikeButton && (
        <TouchableOpacity onPress={handleLikeClick}>
          <Icon name="like1" size={30} color={likeColor} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SupportHeader;
