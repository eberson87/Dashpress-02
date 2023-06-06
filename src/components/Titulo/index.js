import React, {Component} from "react";
import { Text, StyleSheet } from "react-native";


function Titulo (props) {
    return (
        <Text style={css.titulo} >Dashpress</Text>
    );
}


const css = StyleSheet.create ({
   titulo: {
        color: 'rgb(0,0,0)',
        fontSize: 55
        
   }
});
export default Titulo