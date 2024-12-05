import {StyleSheet} from 'react-native';
import constant from '../../constants/constant';

const styles = StyleSheet.create({
  container: {
    // flexDirection: 'row',
  },
  text: {
    fontSize: constant.FontSize.secondaryText,
    fontWeight: constant.FontWeight.regular,
    color: constant.colors.secondaryText,
    // marginLeft: 16,
    marginTop: 12,
    // width: '90%',
    textAlign: 'justify',
  },
  introsecondarytitle: {
    textAlign: 'center',
    fontSize: 17,
    color: constant.colors.secondaryText,
    width: 350,
    bottom: 20,
  },
  image: {
    marginTop: 14,
    marginLeft: 16,
    marginRight: 2,
  },
});

export default styles;
