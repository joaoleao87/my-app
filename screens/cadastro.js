
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image} from 'react-native';
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function App({ navigation }) {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const firebaseConfig = {
    apiKey: "AIzaSyDnDvrNKpMtOk07pjVAdwvL3uMKp3IXvvM",
    authDomain: "my-app-3a79d.firebaseapp.com",
    projectId: "my-app-3a79d",
    storageBucket: "my-app-3a79d.appspot.com",
    messagingSenderId: "941678975132",
    appId: "1:941678975132:web:44076a051e95ce6fe7f559",
    measurementId: "G-1M04HD4B9Y"
  };

  function cadastroContato(){
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => {
            // Signed in
            console.log("cadastrado");
            const user = userCredential.user;
            navigation.navigate("Login");
            // ...
        })
        .catch((error) => {
          console.log("Não cadastrado");
            const errorCode = error.code;
            const errorMessage = error.message;
        });

  }

  return (
    <View>

        
        <TextInput
        style={styles.input}
        placeholder="email"
        keyboardType="email"
        value = {email}
        onChangeText ={email => setEmail(email)}
      />
      <TextInput
        secureTextEntry={true}
        style={styles.input}
        placeholder="senha"
        keyboardType="senha"
        value = {senha}
        onChangeText ={senha => setSenha(senha)}
      />
      <Button  color='#737373' title="salvar" onPress={() => {cadastroContato()}}>

      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#090979',
    alignItems: 'center',
    justifyContent: 'center',
  },
    input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
   imagem: {
    borderRadius: 25,
    width: 100,
    height: 100,
    marginBottom: 25,

  },
});