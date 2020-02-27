import React from 'react';
import { View, StyleSheet } from 'react-native';

function Card(props) {
    return (
        <View style={{...styles.card,...props.style}} >
            {props.children}
        </View>
    );
}

const styles = StyleSheet.create({
    card:{
        paddingTop:10,
        paddingBottom:10,
        alignItems:'center',
        shadowColor:'black',
        shadowOffset:{width:1, height:2},
        shadowRadius:6,
        backgroundColor:'white',
        elevation:15,
        borderColor:"black",
        borderWidth:2
    },
})
export default Card;