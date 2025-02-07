import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './android/app/src/Views/Home/Home';
import Details from './android/app/src/Views/Details/Details';
import Edit from './android/app/src/Views/Edit/Edit';
import CreateProduct from './android/app/src/Views/CreateProduct/CreateProduct';
import SearchProducts from './android/app/src/Views/SearchProducts/SearchProducts';

const Stack = createStackNavigator();

// Configuração da navegação
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: 'black', // Cor de fundo para todas as telas
          },
          headerTitleStyle: {
            color: 'white', // Cor do título para todas as telas
          },
          headerTintColor: 'white',

        }}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerLeft: () => null, // Suprime o botão de voltar na tela Home
          }}
        />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Edit" component={Edit} />
        <Stack.Screen name="CreateProduct" component={CreateProduct} />
        <Stack.Screen name="SearchProducts" component={SearchProducts} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
