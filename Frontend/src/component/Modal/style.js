import {StyleSheet} from 'react-native';
import constant from '../../constants/constant';

const styles = StyleSheet.create({
  container: {
    top: 10,
    backgroundColor: constant.colors.white,
  },
  modalContainer: {
    backgroundColor: constant.colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingTop: 20,
    maxHeight: 780,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'flex-end',
  },
  text: {
    fontSize: 24,
    color: constant.colors.black,
    // marginBottom: 10,
  },
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default styles;
