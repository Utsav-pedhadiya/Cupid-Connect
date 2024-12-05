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
  title: {
    fontSize: 20,
    color: 'black',
  },
  rightContent: {
    flexDirection: 'row',
 
    justifyContent: 'space-between',
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  QualityStyle: {
    flexDirection: 'column',
  },
  content: {
    fontSize: 16,
    marginRight: 10,
    fontWeight: '500',
    color: constant.colors.black,
    textAlign: 'justify',
  },
  Icon:{
    top:5
  },
  horizontalLine: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});

export default styles;
