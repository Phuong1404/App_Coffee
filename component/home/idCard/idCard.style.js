import { StyleSheet, Text, View,Image } from 'react-native';

const styles =StyleSheet.create({

    container: {
        backgroundColor: "#ffeed1",
        width:'100%',
        height:355,

    },
    card:{
        backgroundColor: "#EE712B",
        marginTop:105,
        width:'90%',
        marginLeft:'5%',
        marginRight:'5%',
        borderRadius:10,
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom:20
    },
    cardlinecode:{
        backgroundColor:'#fff',
        height:107,
        borderRadius:8,
        width:'90%',
        marginLeft:'5%',
        marginRight:'5%',
        marginBottom:17,
    },
    textname:{
        color:"white",
        fontSize:20,
        fontWeight: "bold",
        marginLeft:'5%',
        marginBottom:'1%'
    },
    textbean:{
        color:"white",
        fontSize:15,
        marginLeft:'5%',
        marginBottom:'11%',
    },
    giftpoint:{
        backgroundColor: "#933601",
        width:'30%',
        height:'15%',
        marginLeft:'65.5%',
        marginBottom:'-5.2%',
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10
    }
})
export default styles;