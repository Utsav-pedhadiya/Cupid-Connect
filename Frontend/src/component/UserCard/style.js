import {StyleSheet} from 'react-native';
import constant from '../../constants/constant';

const styles = StyleSheet.create({
  container: {
    width: 360,
  },
  name: {
    fontSize: 18,
    color: constant.colors.black,
  },
  datacontainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  maincontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  main: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  location: {
    fontSize: 13,
    color: '#3B3B3B',
    marginRight: 5,
  },
  horizontalLine: {
    borderBottomColor: '#F2F2F2',
    borderBottomWidth: 2,
    marginVertical: 10,
    width: 360,
    top: 10,
    marginBottom: 25,
    alignSelf: 'center',
  },
});

export default styles;
