import {StyleSheet} from 'react-native';
import constant from '../../constants/constant';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    top: 7,
    backgroundColor: 'white',
  },
  containerscroll: {
    bottom: 4,
  },
  Maincontainer: {
    backgroundColor: 'white',
    height: '100%',
    paddingBottom: 30,
  },
  errorText: {
    color: 'red',
    fontSize: 14,
  
    fontWeight: '500',
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
  
  },
  squareButtonone: {
    marginHorizontal: 16,
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
    width: 100, 
    alignItems: 'center',
    justifyContent: 'center',
  },
  upatedsquareButtonone: {
    height: 100,
    width: 100, //in 1
    backgroundColor: constant.colors.squareButtonTwo,
    borderWidth: 0,
    color: 'black',
  },
  updatedsquareButtontwo: {
    borderColor: constant.colors.pinkBorder,
    borderWidth: 1.5,
    backgroundColor: constant.colors.squareButtonOne,
    height: 100,
    width: 100,
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

  inputstyle: {
    bottom: 15,
  },

  inputstyle1: {
    bottom: 35,
  },
});

export default styles;
