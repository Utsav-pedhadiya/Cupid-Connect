import {StyleSheet} from 'react-native';
     import colours from '../../constants/constant';

import constant from '../../constants/constant';

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    width: 69,
    height: 56,
  },
  buttonText: {
    color: constant.colors.white,
    fontSize: constant.FontSize.button,
    fontWeight: constant.FontWeight.medium,
    fontFamily: constant.FontFamily.fontFamily,
  },
  button: {
    // position: 'absolute',
    // bottom: 20,
    // left: 0,
    // right: 0,
    alignItems: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
  },
  image: {
    marginTop: 2,
  },
  disabledButton: {
    opacity: 0.5,
  },
});

export default styles;
