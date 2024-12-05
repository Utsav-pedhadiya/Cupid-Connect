import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#ffff',
  },
  contentContainer: {
    flexGrow: 1,
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
