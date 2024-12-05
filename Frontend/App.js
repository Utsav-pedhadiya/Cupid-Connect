import React, {useEffect} from 'react';
import {
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Keyboard,
  TouchableWithoutFeedback,
  LogBox,
} from 'react-native';
import Routes from './src/navigation/Routes';
import {AuthProvider} from './src/Authcontext/AuthContext';
import 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import constant from './src/constants/constant';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <AuthProvider>
      <>
        <TouchableWithoutFeedback
          onPress={Keyboard.dismiss}
          accessible={false}>
          <SafeAreaView style={styles.container}>
            <Routes />
          </SafeAreaView>
        </TouchableWithoutFeedback>
      </>
    </AuthProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: constant.colors.white,
  },
});

export default App;
