import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Dimensions,
  I18nManager,
} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/AntDesign';
import {useTranslation} from 'react-i18next';
import i18next from 'i18next';

const NotificationCard = ({
  Name,
  content,
  Time,
  onPressAccept,
  onPressReject,
  onPressProfile,
  Iconename,
  read,
  notiType,
  is_read,
}) => {
  const {t, i18n} = useTranslation();
  const [expanded, setExpanded] = useState(false);
  const cardHeight = useRef(new Animated.Value(80)).current;
  const screenWidth = Dimensions.get('window').width;
  const toggleCard = () => {
    Animated.timing(cardHeight, {
      toValue: expanded ? 80 : 140,
      duration: 200,
      useNativeDriver: false,
    }).start();
    setExpanded(!expanded);
  };

  const isRTL = i18next.language === 'ar';

  const card = read ? styles.read : null;
  const isUnpressable =
    notiType.status === 'rejected' ||
    notiType.type === 'contact_request_rejected' ||
    notiType.status === 'contact_request_rejected';

  let buttons = null;
  if (notiType.type === 'profile_contact_request' && notiType.status === null) {
    buttons = (
      <>
        <TouchableOpacity onPress={onPressProfile}>
          <Text style={styles.text}>{t('View Profile')}</Text>
        </TouchableOpacity>
        {!isUnpressable && (
          <>
            <TouchableOpacity onPress={onPressReject} style={styles.button2}>
              <Text style={styles.text}>{t('Reject')}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onPressAccept} disabled={isUnpressable}>
              <Text style={[styles.text, isUnpressable && styles.disabled]}>
                {t('Accept')}
              </Text>
            </TouchableOpacity>
          </>
        )}
      </>
    );
  } else if (
    notiType.type === 'profile_visit' ||
    notiType.type === 'contact_request_accepted' ||
    notiType.status === 'accepted' ||
    notiType.type === 'profile_like' ||
    is_read.type === 'Contact Request Sent' ||
    is_read === 'Request Accepted Already'
  ) {
    buttons = (
      <TouchableOpacity onPress={onPressProfile}>
        <Text style={styles.text}>{t('View Profile')}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <Animated.View
      style={[
        styles.container,
        {width: screenWidth * 0.9},
        card,
        {height: cardHeight},
        isUnpressable && styles.unpressableCard,
      ]}>
      <TouchableOpacity
        onPress={!isUnpressable ? toggleCard : null}
        style={styles.maincard}
        activeOpacity={!isUnpressable ? 0.2 : 1}>
        <View
          style={[
            styles.column,
            {flexDirection: isRTL ? 'row-reverse' : 'row'},
          ]}>
          <Icon
            name={Iconename}
            size={30}
            color="#fc3876"
            style={styles.image}
          />
          <View style={[styles.column2]}>
            <Text style={[styles.name, {textAlign: isRTL ? 'right' : 'left'}]}>
              {t(Name)}
            </Text>
            <Text style={styles.content}>{t(content)}</Text>
          </View>
          <View
            style={[
              styles.column,
              styles.rightAlign,
              {
                justifyContent: isRTL ? 'flex-start' : 'flex-end',
              },
            ]}>
            <Text style={[styles.time]}>{t(Time)}</Text>
          </View>
        </View>
      </TouchableOpacity>
      {expanded && (
        <>
          <View style={[styles.horizontalLine, {width: screenWidth * 0.85}]} />
          <View style={styles.buttonsContainer}>{buttons}</View>
        </>
      )}
    </Animated.View>
  );
};

export default NotificationCard;
