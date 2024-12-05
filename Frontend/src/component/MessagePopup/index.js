import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {ToastProvider, useToasts} from 'react-native-toast-notifications';

const MessagePopup = () => {
  const {showToast} = useToasts();

  const showToastMessage = () => {
    showToast({
      text1: 'Hello!',
      text2: 'This is a custom toast.',
      visibilityTime: 2000,
      autoHide: true,
    });
  };

  return (

    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity onPress={showToastMessage}>
        <Text>Show Toast</Text>
      </TouchableOpacity>
    </View>

  );
};

export default MessagePopup;
