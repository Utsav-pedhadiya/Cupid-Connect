import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: constant.colors.white,
  },
  horizontalLine: {
    borderBottomColor: constant.colors.underLine,
    borderBottomWidth: 2,
    width: 360,
    alignSelf:'center'
  },
  text: {
    textAlign: 'right',
    fontSize: 20,
    padding: 16,
    color:'black'
  },
});
export default styles;
