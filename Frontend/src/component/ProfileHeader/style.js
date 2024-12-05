import {StyleSheet} from 'react-native';
import constant from '../../constants/constant';

const styles = StyleSheet.create({
  container2: {
    backgroundColor: '#f0f0f0',
    // height: "70%",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    shadowColor: 'blue',
    paddingBottom:200
  },
  modalStyle: {
    height: 290,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    shadowColor: 'blue',
  },
  fColoum: {flexDirection: 'row', justifyContent: 'flex-end', margin: 13},
  SColoum: {alignItems: 'center', marginTop: 5},
  name: {fontSize: 20, color: constant.colors.black, width: '80%', textAlign: "center"},
  moNumber: {marginBottom: 10, marginTop: 3,color:'black'},
  modalContainer: {
    height: 80,
    width: 200,
    left: 180,
    top: 50,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
  },
  iconcontainer: {
    flexDirection: 'row',
    top: 5,
  },
  Icon: {
    right: 2,
  },
  text: {
    fontSize: 20,
    color: '#FF0000',
    left: 4,
  },
  closeIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});

export default styles;
