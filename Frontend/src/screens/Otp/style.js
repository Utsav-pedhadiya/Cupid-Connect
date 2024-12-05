import {StyleSheet} from 'react-native';
import constant from '../../constants/constant';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: constant.colors.white,
  },

  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 16,
    top: 10,
  },
  resendcontainer: {
    marginBottom: 22,
  },
  otpInput: {
    width: 48,
    height: 56,
    textAlign: 'center',
    backgroundColor: constant.colors.otpbox,
    fontSize: 18,
    borderRadius: 12,
    color:'black'
  },
  resendText: {
    color: constant.colors.black,
    marginTop: 30,
    marginHorizontal: 20, 
  },
  underlinedText: {
    textDecorationLine: 'underline'
  },
  underlinedResendText: {
    textDecorationLine: 'underline',
    color: constant.colors.black,
    marginTop: 30,
    marginLeft: 20, 
  },
});
export default styles;
