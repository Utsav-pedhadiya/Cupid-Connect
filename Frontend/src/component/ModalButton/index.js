import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './style';
import Icon from 'react-native-vector-icons/AntDesign';

const ModalButton = ({onPress, disabled, title, button2,IconName}) => {
  const newButton2 = button2 ? styles.button2 : null;
  return (
    <>
      <TouchableOpacity
        onPress={disabled ? null : onPress}
        style={[styles.button, disabled && styles.disabledButton]}
        disabled={disabled}>
        <LinearGradient
          colors={['#FF6B5B', '#FC2F7A']}
          style={[styles.buttonContainer, newButton2]}
          start={{x: 1, y: 0}}
          end={{x: 1, y: 1}}>
          <View style={styles.rowContainer}>
            <Text style={styles.buttonText}>{title}</Text>
            <Icon
              name={IconName}
              size={25}
              color="white"
              style={styles.Icon}
            />
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </>
  );
};

export default ModalButton;
