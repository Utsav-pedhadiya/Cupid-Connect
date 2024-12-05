import React, {useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import axios from 'axios';
import styles from './style';
import SupportHeader from '../../component/SupportHeader';
import TextArea from '../../component/TextArea';
import Button from '../../component/Button';
import {FEEDBACK_API} from '../../constants/Api';
import {getData, storeData} from '../../Authcontext/Async';
import {useTranslation} from 'react-i18next';
import i18next from 'i18next';
import {PostApi} from '../../services/postServices';
import {useAuth} from '../../Authcontext/AuthContext';

const ApplicationEvaluate = ({navigation}) => {
  const {t} = useTranslation();
  const {logout} = useAuth();
  const [problemFeedback, setProblemFeedback] = useState('');
  const [feedbackError, setFeedbackError] = useState('');
  const [FeedbackMessage, setFeedbackMessage] = useState('');
  const screenWidth = Dimensions.get('window').width;
  const isRTL = i18next.language === 'ar';
  const handleIconPress = () => {
    navigation.goBack();
  };
  const supportpara = {
    data: 'string',
  };
  const handleSend = async () => {
    let errors = {};
    if (!problemFeedback.trim()) {
      errors.problemFeedback = 'Please enter your Feedback';
    }

    if (Object.keys(errors).length > 0) {
      setFeedbackError(errors.problemFeedback || '');
      return;
    }

    setFeedbackError('');

    storeData('feedback', problemFeedback);

    try {
      const storedToken = await getData('Token');
      const response = await PostApi(FEEDBACK_API, supportpara);
      setFeedbackMessage('Feedback sent sucessfully');
      if (response instanceof Error) {
        if (response.response && response.response.status === 401) {
          logout();
        }
        throw response;
      }
      setTimeout(() => {
        navigation.goBack();
      }, 1000);
    } catch (error) {
      console.error('Error sending Feedback:', error);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 50 : 0}>
      <View style={styles.container}>
        <SupportHeader
          heading="Application Evaluate"
          bigheader={true}
          onPressLeftIcon={handleIconPress}
          showHeadingText={true}
        />

        <View>
          <TextArea
            placeholder="Enter Your Feedback"
            value={problemFeedback}
            onChangeText={text => {
              setProblemFeedback(text);
              setFeedbackError('');
            }}
          />
          <Text
            style={[
              styles.errorText,
              {marginHorizontal: screenWidth * 0.03},
              {
                opacity: t(feedbackError) ? 1 : 0,
                textAlign: isRTL ? 'right' : 'left',
              },
            ]}>
            {t(feedbackError)}
          </Text>
          {FeedbackMessage ? (
            <Text style={styles.FeedbackMessage}>{t(FeedbackMessage)}</Text>
          ) : null}
        </View>
        <Button title="Send" onPress={handleSend} />
      </View>
    </KeyboardAvoidingView>
  );
};

export default ApplicationEvaluate;
