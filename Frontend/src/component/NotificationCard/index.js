import React, {useRef, useState} from 'react';
import {View, Text, TouchableOpacity, Animated} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/AntDesign';

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
}) => {
  const [expanded, setExpanded] = useState(false);
  const cardHeight = useRef(new Animated.Value(80)).current;

  const toggleCard = () => {
    Animated.timing(cardHeight, {
      toValue: expanded ? 80 : 140,
      duration: 200,
      useNativeDriver: false,
    }).start();
    setExpanded(!expanded);
  };

  const card = read ? styles.read : null;

  const isUnpressable = notiType === 'contact_request_accepted';

  return (
    <Animated.View
      style={[
        styles.container,
        card,
        {height: cardHeight},
        isUnpressable && styles.unpressableCard,
      ]}>
      <TouchableOpacity
        onPress={!isUnpressable ? toggleCard : null}
        style={styles.maincard}>
        <View style={[styles.column, styles.leftAlign]}>
          <Icon
            name={Iconename}
            size={30}
            color="#fc3876"
            style={styles.image}
          />
          <View style={[styles.column2, styles.leftAlign]}>
            <Text style={styles.name}>{Name}</Text>
            <Text style={styles.content}>{content}</Text>
          </View>
          <View style={[styles.column, styles.rightAlign]}>
            <Text style={styles.time}>{Time}</Text>
          </View>
        </View>
      </TouchableOpacity>
      {expanded && (
        <>
          <View style={styles.horizontalLine} />
          <View style={styles.buttonsContainer}>
            <TouchableOpacity onPress={onPressProfile}>
              <Text style={styles.text}>View Profile</Text>
            </TouchableOpacity>
            {!isUnpressable && (
              <>
                <TouchableOpacity
                  onPress={onPressReject}
                  style={styles.button2}>
                  <Text style={styles.text}>Reject</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onPressAccept}>
                  <Text style={styles.text}>Accept</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </>
      )}
    </Animated.View>
  );
};

export default NotificationCard;
