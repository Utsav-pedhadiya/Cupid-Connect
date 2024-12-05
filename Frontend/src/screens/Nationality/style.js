import {StyleSheet} from 'react-native';
import constant from '../../constants/constant';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: constant.colors.white,
  },
  options: {
    // right: 16,
  },
  inputstyle: {
    bottom: 15,
  },
  errorText: {
    color: 'red', 
    fontSize: 14, 
    marginHorizontal:16,
    bottom: 15,
    fontWeight:'500',
  },
});
export default styles;
