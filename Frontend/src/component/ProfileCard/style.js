import {StyleSheet} from 'react-native';
import constant from '../../constants/constant';

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 14,
    marginTop: 5,
    marginHorizontal: 16,
  },
  cardText: {
    fontSize: 18,
    color: constant.colors.black,
marginHorizontal:16
  },
  leftContainer: {
    alignItems: 'center',
  },
  leftIcon: {
    marginRight: 10, // Adjust as needed
  },
  rightIcon: {
    marginLeft: 'auto', // Pushes it to the right end
  },
  horizontalLine: {
    borderBottomColor: '#F2F2F2',
    borderBottomWidth: 2,
    alignSelf: 'center',
  },
});

export default styles;
