import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import styles from "./style";
import Icon from "react-native-vector-icons/AntDesign";
const Button = ({ onPress, disabled, title, IconeName }) => {
  return (
    <>
      <TouchableOpacity
        style={styles.button}
        onPress={disabled ? null : onPress}
      >
        <View style={styles.content}>
          <Text style={styles.text}>{title}</Text>
          <Icon name={IconeName} size={24} color="#fff" style={styles.icon} />
        </View>
      </TouchableOpacity>
    </>
  );
};

export default Button;
