
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image} from 'react-native';

export default function App({ navigation }) {
  return (
    <View>

        
       <TextInput
        style={styles.input}
        placeholder="Nome"
        keyboardType="Nome"
      />
        <TextInput
        style={styles.input}
        placeholder="cpf"
        keyboardType="cpf"
      />
        <TextInput
        style={styles.input}
        placeholder="email"
        keyboardType="email"
      />
      <TextInput
        style={styles.input}
        placeholder="senha"
        keyboardType="senha"
      />
      <Button  color='#737373' title="salvar" onPress={() => navigation.navigate("Login")}>

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