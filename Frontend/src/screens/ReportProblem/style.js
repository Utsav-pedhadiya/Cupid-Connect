import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%'
  },

  errorText: {
    color: 'red', 
    fontSize: 14, 
    fontWeight:'500',
  },
  successMessage: {
    color: 'green',
    justifyContent: 'center',
    textAlign:'center'

  },
});

export default styles;
