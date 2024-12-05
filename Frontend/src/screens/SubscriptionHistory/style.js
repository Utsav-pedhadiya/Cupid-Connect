import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  subscriptionContainer: {
    justifyContent: 'space-between',
    borderRadius: 5,
    borderWidth: 1,
    padding: 10,
    width: '80%',
    marginBottom: 10,
    alignSelf: 'center',
  },
  leftContent: {
    flex: 1,
  },
  rightContent: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'black',
  },
  text: {
    fontSize: 16,
    color: 'black',
    marginBottom: 5,
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
