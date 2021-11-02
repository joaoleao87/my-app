
import React from 'react';
import { StyleSheet, Text, View, TextInput, Image} from 'react-native';
import { Header, Button, ListItem} from 'react-native-elements';

export default function App({ navigation }) {
  return (
    <View>
      <Header
            
            centerComponent={{ text: 'Lista', style: { color: '#fff', fontSize:20 } }}
            rightComponent={
                <Button 
                title="+"
                onPress={()=>navigation.navigate('Cadastro')}
                ></Button>}
   />
       <Image
          style={styles.imagem}
          source={{
            uri: 'https://thumbs.dreamstime.com/b/imagem-do-placeholder-perfil-silhueta-cinzenta-nenhuma-foto-127393523.jpg',
          }}
        />
        
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