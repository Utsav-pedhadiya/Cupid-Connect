import {StyleSheet} from 'react-native';
import constant from '../../constants/constant';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: constant.colors.white,
    height: '100%',
  },
  options: {
    right: 16,

  },
  inputstyle: { 
    bottom: 25,
  },
  inputstyleQuality: {
    bottom: 55,
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginHorizontal:16,
    fontWeight: '500',
    // bottom: 16,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    // backgroundColor: 'red',
    // bottom: 16,
  },
});

export default styles;
