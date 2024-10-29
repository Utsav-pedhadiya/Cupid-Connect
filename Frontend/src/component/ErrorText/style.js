import {StyleSheet} from 'react-native';
import constant from '../../constants/constant';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  text: {
    fontSize: constant.FontSize.RadioText,
    marginLeft: 5,
    marginTop: 20,
    color: constant.colors.redBorder,
  },
  image: {
    marginTop: 20,
    marginLeft: 20,
  },
});

export default styles;
