import React from "react";
import { TouchableHighlight, StyleSheet, View, Text, Alert } from "react-native";

const SuperButton = (props) => {
    return (
        <TouchableHighlight 
        style={style.superButton}
        onPress={ props.callback }
        // onPress={() => Alert.alert("Bem vindo! Tela de Login")}
        >
            <View style={style.button}>
                <Text style={style.valor}>{props.valor}</Text>

            </View>

        </TouchableHighlight>
    );
        
}

const style = StyleSheet.create({
    superButton: {
       marginTop: 15,
       borderRadius: 10
       
    }, button: {
        alignItems:'center',
        backgroundColor:'rgb(0,0,0)',
        padding: 12,
        width:300,
        borderRadius: 5
    },
  valor: {
        fontSize: 20,
        color:"#fff",
        fontWeight: 'bold'
  }

    
});

export default SuperButton;
