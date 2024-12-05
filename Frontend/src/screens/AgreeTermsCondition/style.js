import {StyleSheet} from 'react-native';
import constant from '../../constants/constant';

const styles = StyleSheet.create({
  img: {
    height: 136,
    width: 168,
  },
  container: {
    height: '100%',
    backgroundColor: constant.colors.white,
  },
  imgcontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: constant.colors.white,
  },
  logotext: {
    fontSize: constant.FontSize.logoText,
    fontWeight: constant.FontWeight.regular,
    color: constant.colors.black,
    marginTop: 18.7,
  },
  checkboxContainer: {
   marginHorizontal:16,
    bottom: 90,
  },
  checkboxText: {
    fontSize: constant.FontSize.secondaryText,
    fontWeight: constant.FontWeight.regular,
    color: constant.colors.black,
    left: 10,
  },
  errorText: {
    fontSize: 15,
    color: constant.colors.redBorder,
    fontWeight: constant.FontWeight.bold,
    marginHorizontal: 40,
    bottom: 90,
  },  
});
export default styles;
