import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  inputRow: {
    flexDirection: 'row',
    width: 360,
    bottom:15,
    // backgroundColor: 'red'
  },
  heading: {
    right: 16,
  },
  name: {
    fontSize: 20,
    color: 'black',
    left: 16,
    top: 10,
  },
  horizontalLine: {
    borderBottomColor: constant.colors.underLine,
    borderBottomWidth: 2,
    width: 360,
    top: 10,
  },
});

export default styles;
