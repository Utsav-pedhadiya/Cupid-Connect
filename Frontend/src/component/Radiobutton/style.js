import {StyleSheet} from 'react-native';
import constant from '../../constants/constant';

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginLeft: 8,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  label: {
    marginLeft: 10,
    fontSize: constant.FontSize.RadioText,
    fontWeight: constant.FontWeight.regular
  },
});

export default styles;
