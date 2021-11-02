
import React from 'react';
import { StyleSheet, Text, View, TextInput, Image} from 'react-native';
import { Header, Button} from 'react-native-elements' 

export default function login({ navigation }) {
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
        placeholder="Login"
        keyboardType="Login"
      />
        <TextInput
        style={styles.input}
        placeholder="Senha"
        keyboardType="Senha"
      />
      <Button style={{padding:20}} color='#737373' title="Login" onPress={() => navigation.navigate("Home")}>

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