import React, { useState } from "react";
import { View, Text, Image, Alert } from "react-native";
import styles from "./style";
import Button from "../../component/Button";
import { useNavigation } from "@react-navigation/native";
import routeNames from "../../constants/routeNames";
import constant from "../../constants/constant";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const AgreeTermsCondition = () => {
  const { navigate } = useNavigation();
  const [isChecked, setIsChecked] = useState(true);

  const handleCheck = () => {
    setIsChecked(true);
  };

  const handleSubmit = () => {
    if (!isChecked) {
      Alert.alert(
        "Error",
        "You must accept the terms and conditions to proceed."
      );
    } else {
      Alert.alert("Success", "Terms and conditions accepted!");
      navigate(routeNames.PHONENUMBER);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.checkboxContainer}>
        <TouchableOpacity onPress={handleCheck} style={styles.checkbox}>
          <MaterialIcons
            name={isChecked ? "check-box" : "check-box-outline-blank"}
            size={24}
            color="#007bff"
          />
        </TouchableOpacity>
        <Text style={styles.text}>
          I agree to the{" "}
          <Text
            style={styles.link}
            onPress={() =>
              Alert.alert("Terms", "Display terms and conditions here.")
            }
          >
            Terms and Conditions
          </Text>
        </Text>
      </View>

      <Button
        title={"Next"}
        IconeName={"arrowright"}
        onPress={handleSubmit}
      />
    </View>
  );
};

export default AgreeTermsCondition;
