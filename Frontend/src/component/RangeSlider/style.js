import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  inputRow: {
    flexDirection: 'row',
    bottom: 15,
  },
  name: {
    fontSize: 20,
    color: 'black',
    marginHorizontal: 16,
    top: 10,
  },
  horizontalLine: {
    borderBottomColor: constant.colors.underLine,
    borderBottomWidth: 2,
    width: 360,
    top: 2,
    alignSelf: 'center',
  },
});

export default styles;
