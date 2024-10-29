import {StyleSheet} from 'react-native';
import constant from '../../constants/constant';

const styles = StyleSheet.create({
  container: {
    width: 360,
  },
  name: {
    fontSize: 18,
    color: constant.colors.black
  },

  datacontainer: {
    left: 16,
  },
  maincontainer: {
    flexDirection: 'row',
  },
  data: {
    flexDirection: 'row',
    top: 7,
    right:5
  },
  main: {
    flexDirection: 'row',
  },
  icon: {right: 7},
  requestcontainer: {
    flexDirection: 'row',
    left: 63,
  },
  request: {
    fontSize: 13,
    color: "#3B3B3B"
  },
  location: {
    fontSize: 13,
    color: "#3B3B3B"
  },
  horizontalLine: {
    borderBottomColor: '#F2F2F2', 
    borderBottomWidth: 2,
    marginVertical: 10,
    width: 360,
    // left: 63,
    top: 10,
    marginBottom: 25
  },
});

export default styles;
