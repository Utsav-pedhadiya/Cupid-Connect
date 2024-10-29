import {StyleSheet} from 'react-native';
import constant from '../../constants/constant';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: constant.colors.white,
  },
  errorText: {
    fontSize: 15,
    color: constant.colors.redBorder,
    marginLeft: 16,
    top: 5

  },
  error: {
    flexDirection: 'row',
    marginLeft: 16,
    top: 10,
  },
  HeadingText: {
    top: 28,
  },
  SecondText: {
    top: 12,
  },
});

export default styles;
