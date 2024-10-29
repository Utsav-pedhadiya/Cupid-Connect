import {StyleSheet} from 'react-native';
import colours from '../../constants/constant';

import constant from '../../constants/constant';

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#FDDDE6',
        padding: 5,
        height: 30,
        width: 85,
        borderRadius: 15,
        alignItems: 'center',
        margin: 5,
        // borderWidth: 1,
    },
        
    selectedButton: {
        borderColor:'#F81894',
        borderWidth: 1,
    },

    
      buttonText: {
        color: '#FF0090',
        textAlign:'center',
        fontSize: 12,
        paddingRight: 3,
        paddingLeft: 3,
        // fontWeight: 'bold',
      },
      
      

});

export default styles;
