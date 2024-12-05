import React, {useState, useEffect} from 'react';
import {View, KeyboardAvoidingView, Platform} from 'react-native';
import HeadingText from '../../component/HeadingText';
import Button from '../../component/Button';
import InputText from '../../component/InputText';
import styles from './style';

export const ProfileInputBoxHeight = ({title, value, onSaveData}) => {
  const [updateHightValue, setUpdateHightValue] = useState(value);

  useEffect(() => {
    setUpdateHightValue(value);
  }, [value]);

  const updateHeight = text => {
    setUpdateHightValue(text);
  };
  const handleUpdate = () => {
    onSaveData('height', updateHightValue);
  };

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 150 : 0}>
      <View style={styles.heading}>
        <HeadingText title={title} />
        <InputText
          placeholder="Height"
          value={updateHightValue}
          onChangeText={updateHeight}
          keyboardType="numeric"
          maxLength={5}
          handleFocus={true}
          useStyle1={false}
          isFocused={true}
        />
      </View>
      <Button
        title="Save Changes"
        onPress={handleUpdate}
        disabled={!updateHightValue}
      />
    </KeyboardAvoidingView>
  );
};
