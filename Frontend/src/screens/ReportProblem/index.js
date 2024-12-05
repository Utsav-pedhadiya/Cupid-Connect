import React, {useState} from 'react';
import {View, Text, Dimensions, KeyboardAvoidingView, Platform} from 'react-native';
import axios from 'axios';
import styles from './style';
import SupportHeader from '../../component/SupportHeader';
import InputText from '../../component/InputText';
import TextArea from '../../component/TextArea';
import Button from '../../component/Button';
import {REPORT_API} from '../../constants/Api';
import {getData, storeData} from '../../Authcontext/Async';
import {useTranslation} from 'react-i18next';
import i18next from 'i18next';
import { PostApi } from '../../services/postServices';
import { useAuth } from '../../Authcontext/AuthContext';

const ReportProblem = ({navigation}) => {
  const {t} = useTranslation();
  const [problemTitle, setProblemTitle] = useState('');
  const [problemDescription, setProblemDescription] = useState('');
  const [titleError, setTitleError] = useState('');
  const [descriptionError, setDescriptionError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const screenWidth = Dimensions.get('window').width;
  const {logout} = useAuth();
  const isRTL = i18next.language === 'ar';
  const handleIconPress = () => {
    navigation.goBack();
  };
  const supportpara = {
    title: problemTitle,
    note: problemDescription,
  };

  const handleSend = async () => {
    // Validation
    let errors = {};
    if (!problemTitle.trim()) {
      errors.problemTitle = 'Please enter title';
    }
    if (!problemDescription.trim()) {
      errors.problemDescription = 'Please enter your Description';
    }

    if (Object.keys(errors).length > 0) {
      setTitleError(errors.problemTitle || '');
      setDescriptionError(errors.problemDescription || '');
      return;
    }

    setTitleError('');
    setDescriptionError('');

    storeData('title', problemTitle);
    storeData('description', problemDescription);

    try {
      const storedToken = await getData('Token');
      const response = await PostApi(REPORT_API, supportpara);
      setSuccessMessage('Report sent successfully');
      setTimeout(() => {
        navigation.goBack();
      }, 1000);
      if (response instanceof Error) {
        if (response.response && response.response.status === 401) {
          logout();
        }
        throw response;
      }
    } catch (error) {
      console.error('Error sending report:', error);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 50 : 0}>
      <View style={styles.container}>
        <SupportHeader
          heading="Report Problem"
          bigheader={true}
          onPressLeftIcon={handleIconPress}
          showHeadingText={true}
        />
        <View>
          <InputText
            placeholder={'Problem title'}
            value={problemTitle}
            onChangeText={text => {
              setProblemTitle(text);
              setTitleError('');
            }}
          />
          <Text
            style={[
              styles.errorText,
              {marginHorizontal: screenWidth * 0.03},
              {
                opacity: t(titleError) ? 1 : 0,
                textAlign: isRTL ? 'right' : 'left',
              },
            ]}>
            {t(titleError)}
          </Text>
        </View>
        <View>
          <TextArea
            placeholder={'Description of the problem'}
            value={problemDescription}
            onChangeText={text => {
              setProblemDescription(text);
              setDescriptionError('');
            }}
          />
          <Text
            style={[
              styles.errorText,
              {marginHorizontal: screenWidth * 0.03},
              {
                opacity: t(descriptionError) ? 1 : 0,
                textAlign: isRTL ? 'right' : 'left',
              },
            ]}>
            {t(descriptionError)}
          </Text>
        </View>
        {successMessage ? (
          <Text style={styles.successMessage}>{t(successMessage)}</Text>
        ) : null}
        <Button title="Sent" onPress={handleSend} />
      </View>
    </KeyboardAvoidingView>
  );
};

export default ReportProblem;
