import {StyleSheet} from 'react-native';
import constant from '../../constants/constant';

const styles = StyleSheet.create({
  container: {
    height: '88%',
    backgroundColor: constant.colors.white,
  },
  Maincontainer: {
    height: '100%',
    backgroundColor: constant.colors.white,
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    fontWeight: '500',
    // position: 'absolute',
    // top: 85,
    // left: 20,
  },
  ButtonConatiner: {
    backgroundColor: 'white',
  },
});

export default styles;
