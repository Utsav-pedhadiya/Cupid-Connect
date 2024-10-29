import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import styles from "./style";
import Icon from "react-native-vector-icons/AntDesign";
const Button = ({ onPress, disabled, title, IconeName }) => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableOpacity
        onPress={disabled ? null : onPress}
        style={[styles.button, disabled && styles.disabledButton]}
        disabled={disabled}
      >
        {/* <LinearGradient
          colors={['#FF6B5B', '#FC2F7A']}
          style={styles.buttonContainer}
          start={{x: 1, y: 0}}
          end={{x: 1, y: 1}}> */}
        <View style={styles.rowContainer}>
          <Text style={styles.buttonText}>{title}</Text>
          <Icon name={IconeName} size={25} color="white" style={styles.Icon} />
        </View>
        {/* </LinearGradient> */}
      </TouchableOpacity>
    </View>
  );
};

export default Button;
