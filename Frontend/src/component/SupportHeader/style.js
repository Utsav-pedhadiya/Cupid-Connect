import { StyleSheet } from 'react-native';
import constant from '../../constants/constant';

const style = StyleSheet.create({
  container: {
    width: '100%',
    height: 80,
    backgroundColor: constant.colors.white,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,

    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  heading: {
    fontSize: 22,
    color: constant.colors.black,
    textAlign: 'center', 
    flex: 1, 
  },
});

export default style;
