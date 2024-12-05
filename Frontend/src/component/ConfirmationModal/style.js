import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  popup: {
    width: '90%',
    flexDirection: 'row',
    // backgroundColor:'red',
    justifyContent: 'space-between',
  },

  centeredMain: {
    alignItems: 'center', // Center horizontally
    justifyContent: 'center', // Center vertically
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  button: {
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  yesButton: {
    backgroundColor: '#FC3876',
  },
  cancelButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

export default styles;
  