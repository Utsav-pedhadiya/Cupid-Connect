import {StyleSheet} from 'react-native';
import constant from '../../constants/constant';

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center', 
    backgroundColor: constant.colors.white,
  },
  img: {
    alignItems: 'center',
    marginBottom: 20, 
  },
    header: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
  },
  text: {
    alignItems: 'center',
    width: 360,
    paddingTop: 20,
  },
});

export default styles;
