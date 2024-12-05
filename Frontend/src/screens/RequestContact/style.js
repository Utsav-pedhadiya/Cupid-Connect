import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#FFFFFF',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  horizontalLine: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginVertical: 25,
  },
  title: {
    fontSize: 18,
    color: 'black',
  },  
  title1: {
    fontSize: 18,
    bottom: 10,

    color: 'black',
  },
  scrollContainer: {
    paddingVertical: 15, // Adjust as needed to reduce space between cards
  },
  content: {
    fontSize: 16,
    marginRight: 10,
    fontWeight: '500',
    color: constant.colors.black,
    textAlign: 'justify',
  },
  content1: {
    fontSize: 16,
    marginRight: 10,
    fontWeight: '500',
    color: constant.colors.black,
    textAlign: 'justify',
    bottom: 8,
  },
  noDataContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noDataText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default styles;
