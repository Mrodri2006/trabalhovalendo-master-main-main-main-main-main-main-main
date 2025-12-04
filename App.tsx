import { StyleSheet, Text, View } from 'react-native';

import Login    from './screens/Login';
import Register from './screens/Register';
import Register2 from './screens/Register2';
import Menu     from './screens/Menu';
import Selecionados     from './screens/Selecionados';
import LoginTrabalhador     from './screens/LoginTrabalhador';
import HomeTrabalhador     from './screens/HomeTrabalhador';
import Perfil    from './screens/Perfil';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login'    component={Login} options={{ headerShown: false }} /> 
        <Stack.Screen name='Register' component={Register} options={{ headerShown: false }}/>
         <Stack.Screen name='Register2' component={Register2} options={{ headerShown: false }}/>
        <Stack.Screen name='Menu'     component={Menu} options={{ headerShown: false }}/>
        <Stack.Screen name="Selecionados" component={Selecionados} options={{ headerShown: false }} />
        <Stack.Screen name="LoginTrabalhador" component={LoginTrabalhador} options={{ headerShown: false }} />
        <Stack.Screen name="HomeTrabalhador" component={HomeTrabalhador} />
        <Stack.Screen name='Perfil'    component={Perfil} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
