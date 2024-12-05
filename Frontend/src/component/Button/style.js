import {StyleSheet} from 'react-native';
import constant from '../../constants/constant';

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    height: "100%",
   
  },
  buttonText: {
    color: constant.colors.white,
    fontSize: constant.FontSize.button,
    fontWeight: constant.FontWeight.medium,
    fontFamily: constant.FontFamily.fontFamily,
    bottom:3,
    right:3
  },
  button: {
    width: "100%",
    height: 56,
    alignItems: 'center',
    position:"absolute",
    bottom: 10,
    // backgroundColor:"red",
  },
  rowContainer: {
    flexDirection: 'row',
    left:6,
    top:2
  },
  arabicrowContainer: {
    flexDirection: 'row',
    top:2
  },
  disabledButton: {
    opacity: 0.5,
  },
});

export default styles;
