import {StyleSheet} from 'react-native';
import colours from '../../constants/constant';

import constant from '../../constants/constant';

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    width: 350,
    height: 56,
  },
  buttonText: {
    color: constant.colors.white,
    fontSize: constant.FontSize.button,
    fontWeight: constant.FontWeight.medium,
    fontFamily: constant.FontFamily.fontFamily,
    bottom: 3,
    right: 3,
  },
  button: {
    alignItems: 'center',
    margin:5
  },
  button2: {
    width: 50,
    backgroundColor: 'red',
  },
  rowContainer: {
    flexDirection: 'row',
    left: 6,
    top: 2,
  },
  image: {
    marginTop: 2,
  },
  disabledButton: {
    opacity: 0.5,
  },
});

export default styles;
