import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: constant.colors.white,
    },
    img: {
        height: 600,
        justifyContent: 'center',
        alignItems: 'center',
      },
      text: {
        fontSize: constant.FontSize.title,
        alignItems: 'center',
      },
    
      horizontalLine: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginTop: 30,
      },
      text2: {
        fontSize: constant.FontSize.primaryText,
        color: constant.colors.heading,
       top:10
      },
      scrollContainer: {
        paddingVertical: 15, // Adjust as needed to reduce space between cards
      },
      note:{
        bottom:10,
        // right:20
      },
      note2:{
        bottom:10,
     
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