import { StyleSheet } from "react-native";
import constant from "../../constants/constant";

const styles = StyleSheet.create({
  button: {
    width: '90%',
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center', 
    marginVertical: 10,
    position:'absolute',
    bottom:20
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
