import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Aligns content at the ends of the main axis (horizontally)
    padding: 10,
  },
  mainColumn: {
    flex: 1,
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
  },
  time: {
    fontSize: 14,
    color: '#888',
    marginRight: 15,
  },
  rowtwo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 15,
    marginRight: 20,
    bottom: 15,
  },
  phoneIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  mobileNumber: {
    fontSize: 16,
  },
  rowthree: {
    marginTop: 5,
  },
  description: {
    fontSize: 14,
  },
  horizontalLine: {
    width: 360,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignSelf: 'center', // Center the horizontal line
  },
});

export default styles;
