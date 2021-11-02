
import React from 'react';
import { StyleSheet, Text, View, TextInput, Image} from 'react-native';
import { Header, Button, ListItem} from 'react-native-elements';

export default function App({ navigation }) {
  return (
    <View>
      <Header
            
            centerComponent={{ text: 'Contato', style: { color: '#fff', fontSize:20 } }}
            leftComponent={
                <Button 
                title="voltar"
                onPress={()=>navigation.navigate('Home')}
                ></Button>}
   />

        <Text h4>Nome</Text>
       <TextInput
        style={styles.input}
        placeholder="Nome"
        keyboardType="Nilson"
      />
      <Text h4>Email</Text>
        <TextInput
        style={styles.input}
        placeholder="email"
        keyboardType="nilson@nilson.com"
      />
      <Text h4>Telefone</Text>
      <TextInput
        style={styles.input}
        placeholder="81 9898-9898"
        keyboardType="telefone"
      />
      <Button  color='#737373' title="salvar" onPress={() => navigation.navigate("Home")}> </Button>
      <Button  type="outline" title="Excluir" onPress={() => navigation.navigate("Home")}> </Button>
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