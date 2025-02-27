import React, {useEffect} from 'react';
import {BackHandler, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const BackButtonHandler = () => {
  const navigation = useNavigation();


  useEffect(() => {
    const backAction = () => {
      const currentRoute = navigation.getCurrentRoute()?.name;

      console.log('Current route:', currentRoute); // Log para depuração

      if (currentRoute === 'Home' || currentRoute === 'Initial' || currentRoute === 'Login') {
        // Se estamos na Home, mostrar o alert para sair do aplicativo
        Alert.alert(
          'Atenção',
          'Você quer sair do aplicativo?',
          [
            {text: 'Cancelar', onPress: () => null, style: 'cancel'},
            {text: 'Sim', onPress: () => BackHandler.exitApp()}, // Sair do app
          ],
          {cancelable: false},
        );
        return true; // Bloqueia a navegação de volta (impede o comportamento padrão de voltar)
      }

      return false; // Permite que o comportamento padrão de voltar aconteça em outras telas
    };

    // Adiciona o listener para o botão de voltar
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    // Limpa o listener quando o componente for desmontado
    return () => {
      backHandler.remove(); // Remover o listener
    };
  }, [navigation]);

  return null;
};

export default BackButtonHandler;