import {StyleSheet} from 'react-native';
import constant from '../../constants/constant';

const styles = StyleSheet.create({
  button: {
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    width: 360,
    height: 56,
    backgroundColor:'red',
    bottom: 20,
    
  },
  buttonText: {
    color: constant.colors.white,
    fontSize: constant.FontSize.button,
    fontWeight: constant.FontWeight.medium,
    // fontFamily: constant.FontFamily.fontFamily,
    bottom:3,
    right:3
  },
  // button: {
  //   position: 'absolute',
  //   bottom: 20,
  //   left: 0,
  //   right: 0,
  //   alignItems: 'center',
  //   backgroundColor:'red'
  // },
  rowContainer: {
    flexDirection: 'row',
    left:6,
    top:2
  },
  image: {
    marginTop: 2,
  },
  disabledButton: {
    opacity: 0.5,
  },
});

export default styles;
