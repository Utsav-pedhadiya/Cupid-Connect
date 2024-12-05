import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  mainColumn: {
    flex: 1,
    paddingHorizontal: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerRow: {
    marginBottom: 5,
  },
  content: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  time: {
    fontSize: 14,
    color: '#888',
  },
  rowtwo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
marginHorizontal:16
  },
  mobileNumber: {
    fontSize: 16,
  },
  rowthree: {
    marginTop: 5,
  },
  description: {
    fontSize: 14,
    color: 'black',
  },
  horizontalLine: {
    width: 360,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignSelf: 'center',
  },
});

export default styles;
