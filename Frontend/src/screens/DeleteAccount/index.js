import React, {useState} from 'react';
import {View} from 'react-native';
import axios from 'axios';
import styles from './style';
import HomeHeader from '../../component/HomeHeader';
import constant from '../../constants/constant';
import HeadingText from '../../component/HeadingText';
import ErrorText from '../../component/ErrorText';
import SecondaryText from '../../component/SecondaryText';
import {DELETE_ACCOUNT_API} from '../../constants/Api';
import {useAuth} from '../../Authcontext/AuthContext';
import FormattedTextInput from '../../component/FormattedTextInput';
import {getData} from '../../Authcontext/Async';

const DeleteAccount = ({navigation}) => {
  const {Delete} = useAuth();
  const [number, setNumber] = useState('');

  const handleRightText = async () => {
    try {
      const storedToken = await getData('Token');
      const response = await axios.post(
        DELETE_ACCOUNT_API,
        {
          number: number,
        },
        {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
        },
      );
      Delete(storedToken);
    } catch (error) {
      console.error('Error deleting account:', error);
    }
  };

  const handleLeftIcon = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <HomeHeader
        RightText="Delete"
        heading="Delete Account"
        RightIcon="arrow-back-sharp"
        onPressRightText={handleRightText}
        onPressLeftIcon={handleLeftIcon}
      />
      <ErrorText title="Delete Your Account To" IconName={'alert-triangle'} />
 
      <HeadingText title={'Phone number to confirm'} />
      <FormattedTextInput
        value={number}
        onChangeText={setNumber}
        keyboardType="numeric"
        maxLength={11}
        autoFocus
        placeholder="000-000-000"
        placeholderTextColor={constant.colors.placeholder}
        placeholderFontSize={constant.FontSize.secondaryText}
        showIcon={true}
        formatStyle="mobile"
      />
    </View>
  );
};

export default DeleteAccount;
