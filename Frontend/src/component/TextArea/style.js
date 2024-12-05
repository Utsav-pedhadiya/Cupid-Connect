import {StyleSheet} from 'react-native';
import constant from '../../constants/constant';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    // backgroundColor: 'white',
  },
  textArea: {
    height: 130,
    justifyContent: 'flex-start',
    backgroundColor: constant.colors.inputcolor,
    width: 360,
    textAlignVertical: 'top',
    borderRadius: 12,
    marginTop: 24,
    padding: 12,
    borderColor: constant.colors.greyBorder,
    color:'black'
  },
  textAreaYourselfStyle: {
    height: 172,
    width: 370,
  },
  textAreaQualitiesStyle: {
    height: 100,
  },
});

export default styles;
