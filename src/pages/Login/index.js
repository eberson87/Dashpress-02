import React, { useContext } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import Titulo from "../../components/Titulo";
import MeuInput from '../../components/Input';
import SuperButton from '../../components/SuperButton';
import AuthContext from '../../contexts/auth';

export default function Login() {
  const { login } = useContext(AuthContext);

  const handlerLogin = () => {
    login();
      }
  return (
    <View style={styles.container}>
          <Titulo titulo="Login" />
          <MeuInput label="E-mail"
            placeholder = "user@dashpress.com.br"/>

          <MeuInput label="Senha"
            placeholder = "password"/>
         
            <SuperButton
            valor="Entrar"
            callback= {handlerLogin}>

            </SuperButton>

            <SuperButton
            valor="Esqueci a senha"
            callback= { () => Alert ('tela de recuperar senha')}>

            </SuperButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
