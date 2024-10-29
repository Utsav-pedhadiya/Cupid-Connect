import {StyleSheet} from 'react-native';
import constant from '../../constants/constant';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    bottom: 20,
  },
  squareButtonone: {
    marginRight: 16,
    marginLeft: 16,
    height: 100,
    width: 100,
    borderRadius: 12,
    borderColor: constant.colors.pinkBorder,
    borderWidth: 1.5,
    backgroundColor: constant.colors.squareButtonOne,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'pink'
  },
  squareButtontwo: {
    backgroundColor: constant.colors.squareButtonTwo,
    height: 100,
    borderRadius: 12,
    borderWidth: 0,
    width: 100, // in 1
    // backgroundColor: 'yellow'
    alignItems: 'center',
    justifyContent: 'center',
  },
  upatedsquareButtonone: {
    height: 100,
    width: 100, //in 1
    backgroundColor: constant.colors.squareButtonTwo,
    borderWidth: 0,
    color: 'black',
    // backgroundColor: 'yellow'
  },
  updatedsquareButtontwo: {
    borderColor: constant.colors.pinkBorder,
    borderWidth: 1.5,
    backgroundColor: constant.colors.squareButtonOne,
    height: 100,
    width: 100,
    // backgroundColor: 'pink'
  },
  buttonTextOne: {
    fontSize: constant.FontSize.button,
    color: constant.colors.pinkBorder,
  },
  buttonTextTwo: {
    fontSize: constant.FontSize.button,
    textAlign: 'center',
  },
  upatedTextonTwo: {
    color: constant.colors.pinkBorder,
    fontSize: constant.FontSize.button,
  },
  upatedTextonone: {
    color: constant.colors.GButtonText,
    fontSize: constant.FontSize.button,
  },
  malecontainer: {
    // bottom: 25,
  },
  inputstyle: {
    bottom: 15,
  },
});

export default styles;
