import React, {useEffect, useRef, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {TouchableOpacity} from 'react-native';
import Icon from '@react-native-vector-icons/fontawesome';
import GestureRecognizer from 'react-native-swipe-gestures';
import Drawer from 'react-native-drawer';

import Login from './android/app/src/Views/Login/Login';
import Initial from './android/app/src/Views/Initial/Initial';
import Home from './android/app/src/Views/Home/Home';
import Details from './android/app/src/Views/Details/Details';
import Edit from './android/app/src/Views/Edit/Edit';
import CreateProduct from './android/app/src/Views/CreateProduct/CreateProduct';
import SearchProducts from './android/app/src/Views/SearchProducts/SearchProducts';
import {DrawerContent} from './android/app/src/Components/Drawer';
import About from './android/app/src/Views/About/About';
import BackButtonHandler from './android/app/src/Components/BackButton';
import Orientation from 'react-native-orientation-locker';

const Stack = createStackNavigator();

export default function App() {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const drawerRef = useRef(null);
  const [gestureEnabled, setGestureEnabled] = useState(true); // Estado para controlar a ativação do GestureRecognizer

  const buttonHeader = () => {
    if (!isOpenDrawer) {
      openDrawer();
    } else {
      closeDrawer();
    }
  };

  const openDrawer = () => {
    if (gestureEnabled) {
      drawerRef.current.open();
      setIsOpenDrawer(true);
    }
  };

  const closeDrawer = () => {
    if (gestureEnabled) {
      drawerRef.current.close();
      setIsOpenDrawer(false);
    }
  };

  const gestureConfig = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80,
  };

  useEffect(() => {


    Orientation.lockToPortrait();


  })


  return (
    <NavigationContainer>
      <BackButtonHandler></BackButtonHandler>
      <GestureRecognizer
        onSwipeLeft={closeDrawer}
        onSwipeRight={openDrawer}
        config={gestureConfig}
        style={{flex: 1}}>
        <Drawer
          ref={drawerRef}
          type="overlay"
          content={<DrawerContent pressButton={buttonHeader} />}
          openDrawerOffset={0.3}
          panCloseMask={0.2}
          tapToClose={true}
          onClose={closeDrawer}
          styles={{drawer: {backgroundColor: '#fff'}}}>
          <Stack.Navigator
            initialRouteName="Initial"
            screenOptions={{
              headerStyle: {
                backgroundColor: 'black',
              },
              headerTitleStyle: {
                color: 'white',
              },
              headerLeft: () => (
                <TouchableOpacity
                  onPress={buttonHeader}
                  style={{marginLeft: 10}}>
                  <Icon name="navicon" size={32} color="#ffffff" />
                </TouchableOpacity>
              ),
              headerTintColor: 'white',
              headerTitleAlign: 'center',
            }}>
            <Stack.Screen
              name="Home"
              component={Home}
              listeners={{
                focus: () => {
                  // Desabilitar GestureRecognizer ao focar na tela de Login
                  setGestureEnabled(true);
                },
              }}
            />
            <Stack.Screen name="Details" component={Details} />
            <Stack.Screen name="Edit" component={Edit} />
            <Stack.Screen name="Create" component={CreateProduct} />
            <Stack.Screen name="Search" component={SearchProducts} />
            <Stack.Screen name="About" component={About} />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{
                headerShown: false, // Omitir o header
                drawerLockMode: 'locked-closed', // Desabilitar a gaveta (drawer)
              }}
              listeners={{
                focus: () => {
                  // Desabilitar GestureRecognizer ao focar na tela de Login
                  setGestureEnabled(false);
                },
              }}
            />
            <Stack.Screen
              name="Initial"
              component={Initial}
              options={{
                headerShown: false, // Omitir o header
                drawerLockMode: 'locked-closed', // Desabilitar a gaveta (drawer)
              }}
              listeners={{
                focus: () => {
                  // Desabilitar GestureRecognizer ao focar na tela de Login
                  setGestureEnabled(false);
                },
              }}
            />
          </Stack.Navigator>
        </Drawer>
      </GestureRecognizer>
    </NavigationContainer>
  );
}
