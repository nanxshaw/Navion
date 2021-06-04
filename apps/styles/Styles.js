import { Dimensions, StyleSheet } from "react-native";

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const fontColor = '#333';
const fontColor2 = '#666';

const Styles = StyleSheet.create({
    container:{
        flex:1
    },
    title:{
        fontSize:14,
        color:fontColor
    },
    text:{
        fontSize:13,
        color:fontColor
    },
    desc:{
        fontSize:11,
        color:fontColor2
    },

    //------------ LIST DATA
    list_data:{
        
    },
    list_img:{
        width:width,
        height:(width*50)/100
    },
    list_box:{
        margin:5
    },

    // --------- PROFILE
    profile_img:{
        width:40,
        height:40,
        borderRadius:20,
        borderWidth:2,
        borderColor:'#CCC'
    },
    profile_text:{
        marginLeft:10,
        fontSize:12,
        color:fontColor,
    },
    profile_horizontal:{
        flexDirection:'row',
        alignItems:'center',
        paddingLeft:5,
        paddingTop:10,
        paddingBottom:5
    }
})

export default Styles