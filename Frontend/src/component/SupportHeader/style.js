import {StyleSheet} from 'react-native';
import constant from '../../constants/constant';

const styles = StyleSheet.create({
  container2: {
    width: '100%',
    height: 80,
    backgroundColor: constant.colors.white,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  heading: {
    fontSize: 22,
    right: 15,
    color:constant.colors.black
  },
  righttext: {
    fontSize: 22,
    color: constant.colors.pinkBorder,
  },
});

export default styles;
