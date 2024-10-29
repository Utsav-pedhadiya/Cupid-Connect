import {StyleSheet} from 'react-native';
import constant from '../../constants/constant';

const styles = StyleSheet.create({
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 360,
    height: 56,
    borderWidth: 1,
    borderColor: 'gray',
    paddingLeft: 10,
    borderRadius: 12,
    marginTop: 25,
    marginLeft: 16,
    backgroundColor: constant.colors.inputcolor,
  },
  Icon: {
    left: 5,
    marginRight: 16,
  },
  countryCode: {
    color: constant.colors.black,
    fontSize:15
  },
  BodyStructureStyle: {
    width: 155,
    marginRight: 16,
  },
  RangerStyle: {
    width: 155,
  },
  rightIcon: {position: 'absolute', right: 10, bottom: 7},
});

export default styles;
