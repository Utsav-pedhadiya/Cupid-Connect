import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
} from 'react-native';
import {useTranslation} from 'react-i18next';
import HeadingText from '../../component/HeadingText';
import Button from '../../component/Button';
import InputText from '../../component/InputText';
import styles from './style';

export const ProfileInputBoxName = ({title, value, onSaveData}) => {
  const {t} = useTranslation();
  const [genderError, setGenderError] = useState(false);
  const [updateNameValue, setUpdateNameValue] = useState(value);
  const screenWidth = Dimensions.get('window').width;

  useEffect(() => {
    setUpdateNameValue(value);
  }, [value]);

  const updateName = text => {
    setUpdateNameValue(text);

    if (text.length >= 50) {
      setGenderError('Please limit to 50 characters or less');
    } else {
      setGenderError('');
    }
  };

  const handleUpdate = () => {
    onSaveData('name', updateNameValue);
  };

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 150 : 0}>
      <View style={styles.heading}>
        <HeadingText title={title} />
        <InputText
          placeholder="Enter your name"
          value={updateNameValue}
          onChangeText={updateName}
          keyboardType="default"
          maxLength={50}
          handleFocus={true}
          useStyle1={false}
          isFocused={true}
        />
        <Text
          style={[
            styles.errorText,
            {marginLeft: screenWidth * 0.05},
            {opacity: genderError ? 1 : 0},
          ]}>
          {t(genderError)}
        </Text>
      </View>
      <Button
        title="Save Changes"
        onPress={handleUpdate}
        disabled={!updateNameValue}
      />
    </KeyboardAvoidingView>
  );
};
