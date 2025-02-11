import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import { Container, DrawerButton, TextDrawer } from './styles';

export const DrawerContent = ({pressButton}) => {
  const navigation = useNavigation();
  return (
    <Container style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
      <DrawerButton onPress={() => { pressButton(); navigation.navigate('Home'); }}>
        <TextDrawer>Home</TextDrawer>
      </DrawerButton>
      <DrawerButton onPress={() => { pressButton(); navigation.navigate('Create'); }}>
        <TextDrawer>Create</TextDrawer>
      </DrawerButton>
      <DrawerButton onPress={() => { pressButton(); navigation.navigate('Search'); }}>
        <TextDrawer>Search</TextDrawer>
      </DrawerButton>      
      {/* Adicione outros itens de navegação conforme necessário */}
    </Container>
  );
};
