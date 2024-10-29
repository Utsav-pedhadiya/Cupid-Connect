import {StyleSheet} from 'react-native';
import constant from '../../constants/constant';

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    marginVertical: 5,
    marginHorizontal: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: '450',
    // marginBottom: 5,
  },
  rightContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'red'
  },
  content: {
    fontSize: 16,
    marginRight: 10,
    fontWeight: '500',
    color: constant.colors.black,
    textAlign: 'justify',
  },
  horizontalLine: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginVertical: 10,

  },
});

export default styles;
