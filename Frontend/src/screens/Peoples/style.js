import {StyleSheet} from 'react-native';
import constant from '../../constants/constant';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: constant.colors.white,
  },
  user: {
    justifyContent: 'center',
    alignItems: 'center',
    top: 27,
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
  horizontalLine: {
    borderBottomColor: constant.colors.underLine,
    borderBottomWidth: 2,
    alignSelf: 'center',
    top: 10,
  },

  DataText: {
    fontSize: 20,
    marginLeft: 10,
    marginTop: 13,
    color: 'black',
  },
  button: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignContent: 'center',
    marginBottom:10,
  },
  applyButton: {
    marginTop: 10,
  },
  refreshButton: {
    marginTop: 10,
    marginBottom: 8,
    height: 56,
    backgroundColor: '#f7d5e0',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
  linearGradient: {
    borderRadius: 12,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
