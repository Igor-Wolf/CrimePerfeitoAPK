import {
  ImageCard,
  ImageContainer,
  ImageContainerExternal,
  PressButton,
  TextTitle,
} from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CommonActions} from '@react-navigation/native';
import {apiLogin} from '../../service/apiLogin';
import {ActivityIndicator} from 'react-native';
import {useState} from 'react';

function Initial({navigation}) {
  const [loading, setLoading] = useState(false);
  const handlePress = async () => {
    setLoading(true);
    const value = await AsyncStorage.getItem('token');
    if (value) {
      try {
        const response = await apiLogin.get('/login/protected', {
          headers: {
            Authorization: `Bearer ${value}`, // Certificando-se que o token é enviado corretamente
          },
        });
        if (response.status !== 200) {
          setLoading(false);
          navigation.navigate('Login');
        } else if (response.status === 200) {
          //Reseta a navegação ao chegar na view HOME
          navigation.dispatch({
            ...CommonActions.reset({
              index: 0,
              routes: [{name: 'Home'}],
            }),
          });
          setLoading(false);

          navigation.navigate('Home');
        }
      } catch (error) {}
    } else {
      //Reseta a navegação ao chegar na view HOME
      navigation.dispatch({
        ...CommonActions.reset({
          index: 0,
          routes: [{name: 'Login'}],
        }),
      });
      setLoading(false);

      navigation.navigate('Login');
    }
  };

  return (
    <>
      <PressButton onPress={handlePress}>
        <ImageContainerExternal>
          <ImageContainer>
            <ImageCard source={require('../../Assets/logo.png')}></ImageCard>
          </ImageContainer>
        </ImageContainerExternal>
        <TextTitle>Crime Perfeito</TextTitle>
      {loading ? (<ActivityIndicator size="large" color="#0000ff" />) : (<></>)}
      </PressButton>
    </>
  );
}
export default Initial;
