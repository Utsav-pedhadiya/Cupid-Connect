import {StyleSheet} from 'react-native';
import constant from '../../constants/constant';

export default StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 56,
    paddingLeft: 10,
    borderRadius: 12,
    marginTop: 10,
    backgroundColor: '#E5E5E5',
  },
  text: {
    color: 'black',
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    width: '80%',
    maxHeight: '60%',
    justifyContent: 'center',
  },
  ageOptionsContainer: {
    alignSelf: 'center',
    width: '100%',
  },
  ageOptionButton: {
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#CCCCCC',
  },
  ageOptionText: {
    fontSize: 16,
    color: 'black',
    alignSelf: 'center',
  },
  selectedAgeOptionButton: {
    backgroundColor: '#FC3876',
    borderColor: '#FC3876',
  },
  selectedAgeOptionText: {
    color: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  confirmButton: {
    backgroundColor: '#FC3876',
    color: 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  cancelButton: {
    backgroundColor: '#CCCCCC',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
});
