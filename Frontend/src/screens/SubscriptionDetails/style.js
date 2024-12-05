import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: constant.colors.white,
    height: 400,
    flex: 1,
    alignItems:'center'
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    left: 16,
    fontWeight: '500',
  },
  inputBox: {
    right: 10,
  },
  cardBorder: {
    borderRadius: 12,
  },
});

export default styles;
