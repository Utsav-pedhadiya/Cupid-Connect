import {StyleSheet} from 'react-native';
import constant from '../../constants/constant';

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    width: 363,
    height: 80,
    top: 10,
    backgroundColor: '#FFEDEF',
    borderRadius: 12,
    marginBottom: 12,
  },
  read: {
    backgroundColor: '#e5e5e5',
  },
  maincard: {
    flexDirection: 'row',
  },
  image: {
    top: 22,
    left: 15,
  },
  name: {
    fontSize: 18,
    fontWeight: constant.FontWeight.regular,
    color: constant.colors.black,
  },
  content: {
    color: constant.colors.black,
    top: 2,
    fontSize: 14,
  },
  time: {
    fontSize: 13,
    fontWeight: constant.FontWeight.regular,
    color: constant.colors.black,
    top: 20,
    left: 20,
  },
  horizontalLine: {
    borderBottomColor: '#D9D9D9',
    borderBottomWidth: 2,
    marginVertical: 5,
    width: 340,
    alignSelf: 'center',
    top: 30,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 16,
    color: constant.colors.black,
  },
  column: {
    flexDirection: 'row',
    flex: 1,

    justifyContent: 'center',
  },
  leftAlign: {
    alignItems: 'flex-start',
  },
  rightAlign: {
    alignItems: 'flex-end',
  },
  column2: {
    top: 15,
    left: 30,
  },
});

export default styles;
