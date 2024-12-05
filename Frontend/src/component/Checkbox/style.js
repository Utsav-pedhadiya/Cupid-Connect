import { StyleSheet } from 'react-native';
import constant from '../../constants/constant';

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginLeft: 8,
  },
  optionContainer: {
    alignItems: 'center',
    marginVertical: 10,

  },
  label: {
    marginLeft: 10,
    fontSize: constant.FontSize.RadioText,
    fontWeight: constant.FontWeight.regular,
    color: constant.colors.black, 
  },
  checkbox: {
    width: 24, 
    height: 24, 
    borderRadius: 12, 
    borderWidth: 2, 
    borderColor: constant.colors.pinkBorder, 
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkedCheckbox: {
    backgroundColor: constant.colors.pinkBorder,
  },
});

export default styles;
