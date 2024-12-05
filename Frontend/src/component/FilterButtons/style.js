import {StyleSheet} from 'react-native';
import colours from '../../constants/constant';

import constant from '../../constants/constant';

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FDDDE6',

    paddingHorizontal: 10,
    height: 30,
    width: 85,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    borderWidth: 1,
    borderColor: '#FDDDE6',
  },

  selectedButton: {
    borderColor: '#F81894',
    borderWidth: 1,
  },

  buttonText: {
    color: '#FF0090',
    textAlign: 'center',
    fontSize: 12,
  },
});

export default styles;
