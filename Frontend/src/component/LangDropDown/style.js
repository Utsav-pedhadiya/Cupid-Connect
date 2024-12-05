import {StyleSheet} from 'react-native';
import constant from '../../constants/constant';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 20,
  },
  button: {
    backgroundColor: '#fc3876', // Button background color
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5, // Button border radius
  },
  buttonText: {
    color: '#ffffff', // Button text color
    fontSize: 16,
  },
});

export default styles;
