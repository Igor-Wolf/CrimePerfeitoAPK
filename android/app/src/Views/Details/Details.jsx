import React from 'react';
import {Alert, Text, View} from 'react-native';
import {
  BoldText,
  ExternalContainer,
  ImageCard,
  InternalContainer,
  NormalText,
  PricesCard,
  TitleText,
} from './styles';
import {ButtonDefaut} from '../../Components/Buttons';
import {api} from '../../service/api';

function Details({navigation, route}) {
  // Acessando corretamente o 'item' que foi passado pela navegação
  const {item} = route.params;

  const handlePressEdit = () => {
    navigation.navigate('Edit', {item: item});
  };
  const handlePressExclude = async () => {
    try {
      const response = await api.delete(`/food/${item._idreal}`);
      if (response.status === 200) {
        navigation.navigate('Home');
      }
    } catch (error) {
      Alert.alert(
        'Erro na requisição',
        error.message || 'Tente novamente mais tarde',
      );
    }
  };

  return (
    <ExternalContainer>
      <ImageCard source={{uri: item.url}}></ImageCard>
      <InternalContainer>
        <TitleText>{item.name}</TitleText>
        <NormalText>
          <BoldText>Descrição:</BoldText>
          {' ' + item.description}
        </NormalText>
        <PricesCard>
          {item.price.small && (
            <NormalText>
              <BoldText>Pequeno:</BoldText>
              {` R$ ${item.price.small.toFixed(2)}`}
            </NormalText>
          )}
          {item.price.average && (
            <NormalText>
              <BoldText>Médio:</BoldText>
              {' R$ ' + item.price.average.toFixed(2)}
            </NormalText>
          )}
          {item.price.large && (
            <NormalText>
              <BoldText>Grande:</BoldText>
              {' R$ ' + item.price.large.toFixed(2)}
            </NormalText>
          )}
          {item.price.unique && (
            <NormalText>
              <BoldText>Único:</BoldText>
              {' R$ ' + item.price.unique.toFixed(2)}
            </NormalText>
          )}
        </PricesCard>
        <ButtonDefaut
          title={'Editar'}
          variant={'primary'}
          onPress={handlePressEdit}></ButtonDefaut>
        <ButtonDefaut
          title={'Excluir'}
          variant={'Danger'}
          onPress={handlePressExclude}></ButtonDefaut>
      </InternalContainer>
    </ExternalContainer>
  );
}

export default Details;
