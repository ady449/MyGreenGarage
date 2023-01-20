import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    OutputLabel:{
        backgroundColor: 'rgba(254, 255, 255, 1)',
        paddingVertical: 20,
        borderRadius: 10,
        elevation:5,
        marginLeft:50,
        alignItems: 'center',
        width:120,
        alignSelf: 'flex-end',
       
    },
OutputLabel2:{
        backgroundColor: 'rgba(254, 255, 255, 1)',
        paddingVertical: 20,
        paddingLeft: 35,
        borderRadius: 10,
        elevation:5,
        marginBottom:20,
        alignItems: 'center',
        flexDirection:"row",
        width:120,
        alignSelf: 'center',
       
    },
    Text:{
        fontSize:18,
        
        marginLeft:"30%",
        marginRight:40,
        alignSelf: 'center',
    }, 
    containerStatus:{
        flexDirection:"row", 
        flexWrap:"wrap",
        width:"50%",
        height:"30%",
    }
    
    

});