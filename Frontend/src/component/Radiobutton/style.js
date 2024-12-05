import {StyleSheet} from 'react-native';
import constant from '../../constants/constant';

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 5,

  },
  optionContainer: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
  label: {
    fontSize: constant.FontSize.RadioText,
    fontWeight: constant.FontWeight.regular,
  },
  checkBoxContainer: {
    borderWidth: 0,
    backgroundColor: 'white',
    
  },
});

export default styles;
