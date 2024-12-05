
import { StyleSheet } from 'react-native';
import constant from '../../constants/constant';

export default StyleSheet.create({

  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
  },
  container: {
    flexDirection: 'row',
      alignItems: 'center',
      height: 56,
      paddingLeft: 10,
      borderRadius: 12,
      marginTop: 10,
      backgroundColor: constant.colors.inputcolor,
  },
  text: {
    color: 'black',
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#FAFBFB',
    borderRadius: 10,
    padding: 20,
    // width: '80%',
    // height: "35%",
    justifyContent: 'center',
  },

  confirmButtonText: {
    color: '#FC3876',
    fontSize: 16,
  },
  cancelButtonText: {
    color: 'rgba(0, 0, 0, 0.5)',
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
