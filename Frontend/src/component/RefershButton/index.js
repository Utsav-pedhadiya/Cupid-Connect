import React from 'react';
import {TouchableOpacity, Text, Image, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './style';

const RefreshButton = ({onPress, disabled, title, imageSource}) => {
  return (
    <>
      <TouchableOpacity
        onPress={disabled ? null : onPress}
        style={[styles.button, disabled && styles.disabledButton]}
        disabled={disabled}>
        <LinearGradient
          colors={['#FF6B5B', '#FC2F7A']}
          style={styles.buttonContainer}
          start={{x: 1, y: 0}}
          end={{x: 1, y: 1}}>
          <View style={styles.rowContainer}>
          <Text style={styles.buttonText}>{title}</Text>
            {imageSource && <Image source={imageSource} style={styles.image} />}
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </>
  );
};

export default RefreshButton;
