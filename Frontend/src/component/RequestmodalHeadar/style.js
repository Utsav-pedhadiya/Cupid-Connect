import {StyleSheet} from 'react-native';
import constant from '../../constants/constant';

const styles = StyleSheet.create({
  modalStyle: {
    height: 290,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    shadowColor: 'blue',
  },
  SColoum: {alignItems: 'center', marginTop: 15},

  name: {fontSize: 20, color: constant.colors.black, top: 10},

  image: {
    top: 5,
    right: 2,
  },
  text: {
    color: constant.colors.view,
    fontSize: 16,
    top: 10,
  },
});

export default styles;
