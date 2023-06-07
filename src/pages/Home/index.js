import React, {useContext} from "react";
import { Text, View, Button } from "react-native";
import AuthContext from "../../contexts/auth";

function Home ({navigation}) {

    const{logout, usuario} = useContext(AuthContext);

    const handlerLogout = () => {
        logout();
    }
    return (
        <View>
            <Text>Tela de Cadastro</Text>
            <Button 
            title="Iniciar Cadastro"
            onPress={() => navigation.navigate('Details', {nome:"Fulano", idade:21})}
        
            />

            <Button title="Logout"
                onPress={handlerLogout}>
                
            </Button>
        </View>
    );
}

export default Home;