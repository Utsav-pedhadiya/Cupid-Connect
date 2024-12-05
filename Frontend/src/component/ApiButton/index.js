import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {
  ALERT_TYPE,
  Dialog,
  AlertNotificationRoot,
} from 'react-native-alert-notification';

const ApiButton = ({setshow}) => {
  useEffect(() => {
    Dialog.show({
      type: ALERT_TYPE.DANGER,
      title: 'No Internet connection',
      textBody: 'Please check your Internet connection',
      button: 'close',
      onPressButton: () => {
        setshow(true)
      }
    });
  }, []);

  return <AlertNotificationRoot></AlertNotificationRoot>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

export default ApiButton;
