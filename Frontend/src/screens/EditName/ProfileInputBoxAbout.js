import React, {useState, useEffect} from 'react';
import {View, Text, KeyboardAvoidingView, Platform, Dimensions} from 'react-native';
import {useTranslation} from 'react-i18next';
import HeadingText from '../../component/HeadingText';
import Button from '../../component/Button';
import TextArea from '../../component/TextArea';
import styles from './style';

export const ProfileInputBoxAbout = ({title, value, onSaveData}) => {
    const {t} = useTranslation();
    const screenWidth = Dimensions.get('window').width;
    const [aboutError, setAboutError] = useState('');
    const [updateAboutValue, setUpdateAboutValue] = useState(value);
  
    useEffect(() => {
      setUpdateAboutValue(value);
    }, [value]);
  
    const updateAbout = text => {
      setUpdateAboutValue(text);
  
      if (text.length >= 300) {
        setAboutError('Please limit to 300 character or less');
      } else {
        setAboutError('');
      }
    };
  
    const handleUpdate = () => {
      onSaveData('write_about_yourself', updateAboutValue);
    };
  
    return (
  <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      keyboardVerticalOffset={
          Platform.OS === 'ios' ? 150 : 0
        }>
        <View style={styles.heading}>
          <HeadingText title={title} />
          <TextArea
            placeholder="Write About Yourself"
            value={updateAboutValue}
            onChangeText={updateAbout}
            keyboardType="default"
            maxLength={300}
          />
          <Text
            style={[
              styles.errorText,
              {marginLeft: screenWidth * 0.05},
              {opacity: aboutError ? 1 : 0},
            ]}>
            {t(aboutError)}
          </Text>
        </View>
        <Button title="Save Changes" onPress={handleUpdate}  disabled={!updateAboutValue} />
      </KeyboardAvoidingView>
    );
  };