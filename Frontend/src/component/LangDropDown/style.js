import {StyleSheet} from 'react-native';
import constant from '../../constants/constant';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginRight: 20,
  },
  label: {
    fontSize: constant.FontSize.secondaryText,
    marginBottom: 5,
    color: '#333',
  },
  
  selectedValue: {
    fontSize: 16,
    marginTop: 10,
    color: '#555',
  },
  
  dropdownButton: {
 
    padding: 10,
  },
  modalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginRight: 20,
    marginTop: 30,
  },
  modalContent: {
    borderRadius: 10,
  },
  option: {
    padding: 10,
  },
  laung:{
    flexDirection:'row',
  },
  text:{
    top:2,
    color:constant.colors.black,
    fontSize:16
  },
  drop:{
    color:constant.colors.black,
    fontSize:16
  }
});

export default styles;
