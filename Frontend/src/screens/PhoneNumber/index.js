import React, { useState } from "react";
import { View, Text } from "react-native";
import Header from "../../component/Header";
import Button from "../../component/Button";
import routeNames from "../../constants/routeNames";
import { useNavigation } from "@react-navigation/native";
import styles from "./style";
import { useAuth } from "../../Authcontext/AuthContext";
import { GENERATE_OTP_API } from "../../constants/Api";
import axios from "axios";
import MobileNumberInput from "../../component/MobileNumberInput";

const PhoneNumber = ({ navigation }) => {
  const { navigate } = useNavigation();
  // const {Monumber} = useAuth();
  const [isInputTouched, setIsInputTouched] = useState(false);
  const [mobileNumber, setMobileNumber] = useState("");

  const [countryCode, setCountryCode] = useState("+1"); // Default country code
  const countryCodes = [
    { label: "+1 (USA)", value: "+1" },
    { label: "+91 (India)", value: "+91" },
    { label: "+44 (UK)", value: "+44" },
    { label: "+61 (Australia)", value: "+61" },
    { label: "+81 (Japan)", value: "+81" },
    // Add more country codes as needed
  ];
  const handleInputChange = (text) => {
    const numericText = text.replace(/[^0-9]/g, "");
    setMobileNumber(numericText);
  };

  const isMobileNumberValid = mobileNumber.replace(/-/g, "").length >= 10;

  const handleIconPress = () => {
    navigation.goBack();
  };
  const handleNextButtonPress = async () => {
    if (isMobileNumberValid) {
      try {
        console.log("API Endpoint:", GENERATE_OTP_API);
        const response = await axios.post(GENERATE_OTP_API, {
          phoneNumber: `${countryCode}${mobileNumber}`,
        });
        navigate(routeNames.OTP, {
          phoneNumber: countryCode + mobileNumber,
          response: response.data,
        });
      } catch (error) {
        console.error("Axios Setup Error:", error.message);
      }
    } else {
      setIsInputTouched(true);
    }
  };

  return (
    <>
      <View style={styles.container}>
        <Header onIconPress={handleIconPress} />

        <MobileNumberInput
          onValueChange={(value) => setCountryCode(value)}
          items={countryCodes}
          RNPickervalue={countryCode}
          value={mobileNumber}
          onChangeText={handleInputChange}
        />
        <Button
          title="Next"
          IconeName={"arrowright"}
          onPress={handleNextButtonPress}
          disabled={!isMobileNumberValid}
        />
      </View>
    </>
  );
};

export default PhoneNumber;
