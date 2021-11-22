
import React, { useState } from 'react';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { StyleSheet, Text, View, TextInput, Image} from 'react-native';
import { Header, Button} from 'react-native-elements';

export default function login({ navigation }) {
  
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
  
  function loginContato(){
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => {
            // Signed in
            console.log("Conectado");
            const user = userCredential.user;
            navigation.navigate("Home");
            // ...
        })
        .catch((error) => {
          console.log("Não conectado");
            const errorCode = error.code;
            const errorMessage = error.message;
        });

  }


  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  return (
    <View>
      
      
       <Image
          style={styles.imagem}
          source={{
            uri: 'https://cdn.pixabay.com/photo/2016/02/17/16/32/person-1205346_960_720.png',
          }}
        />
       <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="Email"
        value = {email}
        onChangeText ={email => setEmail(email)}
      />
        <TextInput
        secureTextEntry={true}
        style={styles.input}
        placeholder="Senha"
        keyboardType="Senha"
        value = {senha}
        onChangeText ={senha => setSenha(senha)}
      />
      <Button style={{padding:20}} color='#737373' title="Login" onPress={() =>{loginContato()} }>

      </Button>
      <Button style={{padding:20}} color='#737373' title="cadastro"  onPress={() => navigation.navigate("Cadastro")}>
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
    padding: 20,

  },
});