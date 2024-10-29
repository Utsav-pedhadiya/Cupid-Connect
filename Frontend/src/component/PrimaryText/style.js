import {StyleSheet} from 'react-native';
import constant from '../../constants/constant';

const styles = StyleSheet.create({
  text: {
    fontSize: constant.FontSize.primaryText,
    fontWeight: constant.FontWeight.semibold,
    color: constant.colors.heading,
    marginLeft: 16,
    marginTop: 28,
    // fontSize: 30
  },
  introheadingtitle: {
    fontSize: constant.FontSize.title,
  },
});

export default styles;
