import {StyleSheet} from 'react-native';
import constant from '../../constants/constant';

const styles = StyleSheet.create({
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 56,
    borderWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 10,
    borderRadius: 12,
    marginTop: 25,
    // backgroundColor:'red'
    backgroundColor: constant.colors.inputcolor,
  },
  mainContainer: {
    alignItems: 'center',
  },
  Icon: {
    marginHorizontal: 16,
  },
  countryCode: {
    color: constant.colors.black,
    fontSize: 15,
  },
  BodyStructureStyle: {
    backgroundColor: 'red',
    margin: 16,
  },
  RangerStyle: {
    width: 155,
  },
  rightIcon: {position: 'absolute', bottom: 1},
});

export default styles;
