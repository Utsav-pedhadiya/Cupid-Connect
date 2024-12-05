import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  placeholderText: {
    color: '#333',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  modalHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  option: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
  closeButton: {
    marginTop: 20,
    fontSize: 16,
    color: 'blue',
    textAlign: 'center',
  },
});

export default styles;
