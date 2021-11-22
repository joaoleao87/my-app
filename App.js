// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginTela from './screens/login';
import Cadastro from './screens/cadastro';
import Home from './screens/home';
import Contato from './screens/contato';
import Editar from './screens/editar'


const Stack = createNativeStackNavigator();
//navegação
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen name="Login" component={LoginTela} options={{ headerShown: false }}/>
        <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: true }}/>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Contato" component={Contato} options={{ headerShown: false }} />
        <Stack.Screen name="Editar" component={Editar} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;