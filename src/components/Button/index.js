import react from "react";
import { Button, Alert } from "react-native";


const MeuButton = (props) => {
    return (
        <Button
            color="blue"
            title={props.titulo}
            onPress={() => Alert.alert('Aqui eu farei o login')}
        />

        
    )
}

export default MeuButton;