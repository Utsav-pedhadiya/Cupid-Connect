import {StyleSheet} from 'react-native';
import constant from '../../constants/constant';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: constant.colors.white,
   
  },
  text: {
    fontSize: constant.FontSize.title,
    alignItems: "center",
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

});

export default styles;
