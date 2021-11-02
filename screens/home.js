
import React from 'react';
import { StyleSheet, Text, View, TextInput, Image} from 'react-native';
import { Header, Button, ListItem} from 'react-native-elements';

export default function App({ navigation }) {
  return (
    <View>
            <Header
            
            centerComponent={{ text: 'Lista de contatos', style: { color: '#fff', fontSize:20 } }}
            rightComponent={
                <Button 
                title="+"
                onPress={()=>navigation.navigate('Contato')}
                ></Button>}
   />
    <ListItem>
    <Text h4>Contato 1</Text>
    <Button 
                title="editar"
                onPress={()=>navigation.navigate('Editar')}
                ></Button>          
    </ListItem>
    <ListItem>
    <Text h4>Contato 2</Text>
    <Button 
                title="editar"
                onPress={()=>navigation.navigate('Editar')}
                ></Button>          
    </ListItem>
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