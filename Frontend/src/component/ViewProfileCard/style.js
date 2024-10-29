import {StyleSheet} from 'react-native';
import constant from '../../constants/constant';

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    width: 363,
    height: 140,
    top: 10,
    backgroundColor: '#FFEDEF',
    borderRadius: 12,
    marginBottom: 12,
  },
  read: {
    backgroundColor: '#e5e5e5',
  },
  maincontainer: {
    flexDirection: 'row',
  },
  image: {
    top: 25,
    left: 15,
  },

  datacontainer: {
    left: 30,
  },
  maindata: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: 17,
  },
  name: {
    fontSize: 18,
    fontWeight: constant.FontWeight.regular,
    color: constant.colors.black,
  },
  time: {
    marginLeft: 125,
    top: 2,
    fontSize: 14,
    color: constant.colors.black,
  },
  datacontainer2: {
    top: 20,
  },
  name2: {
    fontSize: 13,
    fontWeight: constant.FontWeight.regular,
    color: constant.colors.black,
  },
  horizontalLine: {
    borderBottomColor: '#F2F2F2',
    borderBottomWidth: 2,
    marginVertical: 5,
    width: 340,
    left: 15,
    top: 30,
    // marginBottom: 25
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
    paddingHorizontal: 20,
  },
  button2: {
    left: 50,
  },
  text: {
    fontSize: 16,
    color: constant.colors.black,
  },
});

export default styles;
{
  /* <SecondaryText secondTitle={'Accept'} /> */
}
