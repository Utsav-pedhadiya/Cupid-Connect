import React, { useState } from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import RNPickerSelect from "react-native-picker-select";

const MobileNumberInput = ({ onValueChange, RNPickervalue, value, items, onChangeText }) => {
  const [mobileNumber, setMobileNumber] = useState("");

 

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Mobile Number</Text>
      <View style={styles.inputContainer}>
        {/* Country Code Picker */}
        <RNPickerSelect
          onValueChange={onValueChange}
          items={items}
          value={RNPickervalue}
          style={{
            inputAndroid: styles.picker, // Android styles
            inputIOS: styles.picker, // iOS styles
          }}
        />
        {/* Phone Number Input */}
        <TextInput
          style={styles.input}
          placeholder="Enter your number"
          keyboardType="phone-pad"
          value={value}
          onChangeText={onChangeText}
          maxLength={15}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    marginVertical: 20,
    alignSelf: "center",
  },
  label: {
    marginBottom: 10,
    fontSize: 16,
    color: "#333",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    backgroundColor: "#f9f9f9",
    overflow: "hidden",
  },
  picker: {
    flex: 1,
    padding: 10,
    color: "#333",
    backgroundColor: "#f9f9f9",
  },
  input: {
    flex: 2,
    padding: 10,
    fontSize: 16,
    backgroundColor: "#f9f9f9",
    color: "#333",
  },
});

export default MobileNumberInput;
