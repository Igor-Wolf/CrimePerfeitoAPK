import React, {useState, useEffect} from 'react';
import {ActivityIndicator, Alert, Text, View} from 'react-native';
import {
  BoldText,
  Container,
  ContainerButton,
  ImageCard,
  ImageContainer,
  ImageContainerExternal,
  ImputNumber,
  LogginButton,
} from './styles';

import CheckBox from '@react-native-community/checkbox';
import { apiLogin } from '../../service/apiLogin';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {CommonActions} from '@react-navigation/native';


function Login({ navigation }) {
  
  const [loading, setLoading] = useState(false);

  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [check, setCheck] = useState(false);

  const req = async body => {
    try {
      const response = await apiLogin.post(`/login/autentication`, body);
      return response;
    } catch (error) {
      return error.response;
    }
  };

  const handleLogin = async () => {

    setLoading(true)
    const body = {
      user: user,
      passwordHash: pass,
      remember: check,
    };

    const response = await req(body);

    if (response.status == 200) {
      await AsyncStorage.setItem('token', response.data);
      //Reseta a navegação ao chegar na view HOME
      navigation.dispatch({
        ...CommonActions.reset({
          index: 0,
          routes: [{name: 'Home'}],
        }),
      })

      setLoading(false)
      navigation.navigate('Home');
    } else {
      setLoading(false)
      Alert.alert('Usuario ou senha invalidos');
    }
  };

  navigation.dispatch((state) => {
    // Encontrar o índice da tela 'Home'
    const index = state.routes.findIndex((r) => r.name === 'Login');
  
    // Criar um novo array de rotas que mantém 'Home' e todas as telas depois dela
    const routes = state.routes.slice(index);
  
    // Realizar o reset da navegação
    return CommonActions.reset({
      ...state,         // Preserva o estado atual
      routes,           // Mantém as rotas após 'Home'
      index: 0,         // O índice será 0, ou seja, 'Home' será a primeira na pilha
    });
  });

  
  return (
    <Container>
      <ImageContainerExternal>
        <ImageContainer>
          <ImageCard source={require('../../Assets/logo.png')}></ImageCard>
        </ImageContainer>
      </ImageContainerExternal>

      <BoldText>Usuário:</BoldText>
      <ImputNumber
        value={user}
        onChangeText={setUser}
        keyboardType="default"
        placeholder="Digite o nome usuario"
      />
      <BoldText>Senha:</BoldText>
      <ImputNumber
        value={pass}
        onChangeText={setPass}
        secureTextEntry={true}
        keyboardType="default"
        placeholder="Digite a senha"
      />
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <CheckBox
          value={check}
          onValueChange={newValue => setCheck(newValue)}
        />
        <BoldText style={{marginLeft: 8, color: 'black'}}>
          Lembrar senha?
        </BoldText>
      </View>
      <ContainerButton>
        <LogginButton onPress={handleLogin}>
          <BoldText>Login</BoldText>
        </LogginButton>
      </ContainerButton>
            {loading ? (<ActivityIndicator size="large" color="#0000ff" />) : (<></>)}
      
    </Container>
  );
}

export default Login;
