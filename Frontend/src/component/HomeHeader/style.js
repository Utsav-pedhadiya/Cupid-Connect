import {StyleSheet} from 'react-native';
import constant from '../../constants/constant';

const styles = StyleSheet.create({
  container: {
    height: 100,
    // width: 390,
    backgroundColor: '#FFFFFF',
    shadowRadius: 4,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  container2: {
    width: '100%',
    height: 80,
    backgroundColor: constant.colors.white,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16
  },
  main: {
    // flexDirection: 'row',
    alignItems: 'center',
    top: 15,
    paddingRight:18
  },
  text: {
    flex: 1,
    left:16,
    fontSize: 24,
    color:constant.colors.black,
    fontWeight: constant.FontWeight.medium,
  },
  heading: {
    fontSize: 22,
    fontWeight: constant.FontWeight.medium,
    color: constant.colors.black,
    left:9
    // textAlign: 'center',
  },
  righttext:{
    fontSize:22,
    color:constant.colors.pinkBorder
  },
  user: {
    justifyContent: 'center',
    alignItems: 'center',
    top: 27,
  },
});

export default styles;
