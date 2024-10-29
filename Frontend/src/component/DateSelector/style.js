
import { StyleSheet } from 'react-native';
import constant from '../../constants/constant';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 360,
    height: 56,
    paddingLeft: 10,
    borderRadius: 12,
    marginTop: 10,
    marginLeft: 16,
    backgroundColor: constant.colors.inputcolor,
  },
  text: {
    color: 'black',
    textAlign: 'center',
  },
});
