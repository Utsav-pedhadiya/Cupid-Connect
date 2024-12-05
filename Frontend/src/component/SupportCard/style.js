import {StyleSheet} from 'react-native';
import constant from '../../constants/constant';

const styles = StyleSheet.create({
  container: {
    height: 78,
  },
  image: {
    alignSelf: 'flex-start',
    marginTop: 5,
  },
  maincontainer: {
    alignItems: 'center',
  },
  name: {
    fontSize: 20,
    color: 'black',
  },
  datacontainer: {
    flex: 1,
    marginHorizontal: 16,
  },
  user: {
    top: 27,
  },
  image2: {
    alignSelf: 'center',
  },
  Information: {
    fontSize: 14,
    top: 5,
    color: 'black',
  },
  horizontalLine: {
    borderBottomColor: constant.colors.underLine,
    borderBottomWidth: 2,
    alignSelf: 'center',
    bottom: 15,
  },
});

export default styles;
