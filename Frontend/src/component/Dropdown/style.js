import {StyleSheet} from 'react-native';

const style = StyleSheet.create({

  button: {
    // backgroundColor: '#DDDDDD',
    padding: 10,
    borderRadius: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  optionItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#DDDDDD',
  },
  closeButton: {
    marginTop: 10,
    alignItems: 'center',
  },

  container: {
    backgroundColor: 'white',
    padding: 16,
  },

  dropdown: {
    width: 360,
    height: 56,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 12,
    paddingHorizontal: 8,
    backgroundColor: '#f5f5f5',
    position: 'relative', 
    alignItems: 'flex-start',
  },

  label: {
    position: 'absolute',
    backgroundColor: 'pink',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
});

export default style;
