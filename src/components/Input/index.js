import react from "react";
import { StyleSheet, SafeAreaView, Text, TextInput } from "react-native";

function MeuInput (props) {
  return (
    <SafeAreaView style = {style.area}>
          <Text>
            {props.label}
          </Text>
          <TextInput 
          style={style.input}
          placeholder={props.placeholder}>
          </TextInput>

    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  area: {
    marginBottom:15,
    
  },
  input:{
      borderWidth:1,
      height:42,
      marginTop:3,
      padding:12,
      width:300,
      borderRadius: 5,
      marginTop: 5,
      backgroundColor: '#C0C0C0'

  }
})

export default MeuInput;






