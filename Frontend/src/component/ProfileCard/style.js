import {StyleSheet} from 'react-native';
import constant from '../../constants/constant';

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 14,
    marginTop: 5,
  },
  cardText: {
    flex: 1,
    fontSize: 18,
    color: constant.colors.black
  },
  leftIcon: {
    marginRight: 9,
    marginLeft: 9,
  },
  rightIcon: {
    marginRight: 18,
  },
  horizontalLine: {
    borderBottomColor: '#F2F2F2',
    borderBottomWidth: 2,
    width: 340,
    left: 30,
  },
});

export default styles;
