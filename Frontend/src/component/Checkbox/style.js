import {StyleSheet} from 'react-native';
import colours from '../../constants/constant';

import constant from '../../constants/constant';

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10, // Change the border radius to make it rounded
    marginRight: 10,
  },
  checked: {
    backgroundColor: 'blue',
    borderColor: 'blue',
  },
  label: {
    fontSize: 16,
  },
});

export default styles;
