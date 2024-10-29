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
    flexDirection: 'row',
    left: 16,
    bottom: 50,
  },
  checkboxText: {
    fontSize: constant.FontSize.secondaryText,
    fontWeight: constant.FontWeight.regular,
    color: constant.colors.black,
    left: 10,
  },
  Icon: {
    color: 'black',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  selectedValue: {
    marginTop: 20,
    fontSize: 16,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  dropdown: {
    backgroundColor: 'white',
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    marginTop: 20,
  },
  errorText: {
    fontSize: 15,
    color: constant.colors.redBorder,
    fontWeight: constant.FontWeight.bold,
    marginLeft: 40,
    bottom: 50,
  },
});
export default styles;
