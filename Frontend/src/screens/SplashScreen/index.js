import React, { useEffect } from "react";
import { View, Image, Text } from "react-native";
import constant from "../../constants/constant";
import { useNavigation } from "@react-navigation/native";
import styles from "./style";

const SplashScreen = () => {
  console.log("Splash");

  return (
    <View style={styles.container}>
      <Image source={constant.imagePath.splashscreen} style={styles.image} />
    </View>
  );
};
export default SplashScreen;
