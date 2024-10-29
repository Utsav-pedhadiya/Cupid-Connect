import {StyleSheet} from 'react-native';
import constant from '../../constants/constant';

const styles = StyleSheet.create({
  container: {
    width: 360,
    height: 78,
  },
  image: {top: 5},
  maincontainer: {
    flexDirection: 'row',
    top: 16,
  },
  name: {
    fontSize: 20,
    color: 'black'
  },
  datacontainer: {
    left: 10,
  },
  user: {
    top: 27,
  },
  image2: {
    bottom: 30,
    left: 330,
  },
  Information: {
    fontSize: 14,
    top: 5,
    width:280
  },
  horizontalLine: {
    borderBottomColor: constant.colors.underLine,
    borderBottomWidth: 2,
    width: 360,
    top: 10,
  },
});

export default styles;
