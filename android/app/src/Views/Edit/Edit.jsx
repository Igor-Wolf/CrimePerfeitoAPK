import React, {useEffect, useState} from 'react';
import {Alert, ScrollView, Text, View} from 'react-native';
import {
  BoldText,
  ExternalContainer,
  ExternalScroll,
  ImageCard,
  ImputDescription,
  ImputNumber,
  ImputNumberPrices,
  InternalContainer,
  NormalText,
  PricesCard,
  TitleText,
} from './styles';
import {ButtonDefaut} from '../../Components/Buttons';
import CheckBox from '@react-native-community/checkbox';
import RNPickerSelect from 'react-native-picker-select';
import {api} from '../../service/api';
import Icon from '@react-native-vector-icons/fontawesome';

function Edit({navigation, route}) {
  // Acessando corretamente o 'item' que foi passado pela navegação
  const {item} = route.params;

  const options = [
    {label: 'Pizza', value: 'Pizza'},
    {label: 'Lanche', value: 'Lanche'},
    {label: 'Salada', value: 'Salada'},
    {label: 'Porção', value: 'Porção'},
    {label: 'Bebida', value: 'Bebida'},
  ];

  const imageError =
    'data:image/png;base64,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';

  const [foodName, setFoodName] = useState(item.name);
  const [foodCategory, setFoodCategory] = useState(item.category);
  const [foodDescription, setFoodDsecription] = useState(item.description);
  const [foodAvailable, setFoodAvailable] = useState(item.available);
  const [foodPriceSmall, setFoodPriceSmall] = useState(
    item.price.small ? item.price.small.toFixed(2) : '',
  );
  const [foodPriceAverage, setFoodPriceAverage] = useState(
    item.price.average ? item.price.average.toFixed(2) : '',
  );
  const [foodPriceLarge, setFoodPriceLarge] = useState(
    item.price.large ? item.price.large.toFixed(2) : '',
  );
  const [foodPriceUnique, setFoodPriceUnique] = useState(
    item.price.unique ? item.price.unique.toFixed(2) : '',
  );
  const [foodUrl, setFoodUrl] = useState(item.url);

  const handlePressExclude = () => {
    navigation.navigate('Home');
  };
  const handlePressEdit = async () => {
    if (isNaN(foodPriceSmall) || null) {
      Alert.alert('Entre com números válidos como 23.55');
      return;
    } else if (isNaN(foodPriceAverage) || null) {
      Alert.alert('Entre com números válidos como 23.55');

      return;
    } else if (isNaN(foodPriceLarge) || null) {
      Alert.alert('Entre com números válidos como 23.55');

      return;
    } else if (isNaN(foodPriceUnique) || null) {
      Alert.alert('Entre com números válidos como 23.55');

      return;
    } else {
      const request = {
        name: foodName,
        category: foodCategory,
        description: foodDescription,
        available: foodAvailable,
        price: {
          small: parseFloat(foodPriceSmall),
          average: parseFloat(foodPriceAverage),
          large: parseFloat(foodPriceLarge),
          unique: parseFloat(foodPriceUnique),
        },
        url: foodUrl,
        _idreal: item._idreal,
      };

      try {
        const response = await api.patch(`/food/${item._idreal}`, request); // retornando todo o banco de dados
        if (response.status === 200) {
          navigation.navigate('Home');
        }
      } catch (error) {
        Alert.alert(
          'Erro na requisição',
          error.message || 'Tente novamente mais tarde',
        );
      }
    }
  };

  return (
    <ExternalScroll>
      <ExternalContainer>
        <ImageCard
          source={{
            uri: foodUrl ? foodUrl : imageError,
          }}></ImageCard>
        <InternalContainer>
          <TitleText>Nome:</TitleText>
          <ImputNumber
            value={foodName}
            onChangeText={setFoodName}
            keyboardType="default"
            placeholder="Digite o nome do prato"
          />
          <TitleText>Descrição:</TitleText>
          <ImputDescription
            value={foodDescription}
            onChangeText={setFoodDsecription}
            keyboardType="default"
            placeholder="Digite a descrição do prato"
            multiline={true} // Permite várias linhas de texto
            // Habilita a rolagem vertical
            numberOfLines={4} // Define o número de linhas visíveis
          />

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <CheckBox
              value={foodAvailable}
              onValueChange={newValue => setFoodAvailable(newValue)}
            />
            <Text style={{marginLeft: 8, color: 'black'}}>
              {foodAvailable ? 'Prato disponível' : 'Prato não disponível'}
            </Text>
          </View>

          <TitleText>Categoria:</TitleText>

          <RNPickerSelect
            Icon={() => (
              <Icon
                name="chevron-down"
                size={20}
                color="black"
                style={{padding: 15}}
              />
            )}
            useNativeAndroidPickerStyle={false}
            onValueChange={value => setFoodCategory(value)}
            items={options}
            placeholder={{
              label: 'Escolha uma opção...',
              value: null,
            }}
            style={{
              inputAndroid: {
                color: 'black', // cor para Android
              },
              inputIOS: {
                color: 'black', // cor para iOS
              },
              placeholder: {
                color: 'black', // cor do placeholder
              },
            }}
            value={foodCategory}
          />

          <TitleText>Preços:</TitleText>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <TitleText>Pequeno:</TitleText>
            <ImputNumberPrices
              value={foodPriceSmall}
              onChangeText={setFoodPriceSmall}
              keyboardType="number"
              placeholder="Digite o preço do prato"
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <TitleText>Médio:</TitleText>
            <ImputNumberPrices
              value={foodPriceAverage}
              onChangeText={setFoodPriceAverage}
              keyboardType="number"
              placeholder="Digite o preço do prato"
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <TitleText>Grande:</TitleText>
            <ImputNumberPrices
              value={foodPriceLarge}
              onChangeText={setFoodPriceLarge}
              keyboardType="number"
              placeholder="Digite o preço do prato"
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <TitleText>Unico:</TitleText>
            <ImputNumberPrices
              value={foodPriceUnique}
              onChangeText={setFoodPriceUnique}
              keyboardType="number"
              placeholder="Digite o preço do prato"
            />
          </View>

          <TitleText>Link da Imagem:</TitleText>
          <ImputNumber
            value={foodUrl}
            onChangeText={setFoodUrl}
            keyboardType="default"
            placeholder="Digite o link da imagem"
          />

          <ButtonDefaut
            title={'Salvar'}
            variant={'primary'}
            onPress={handlePressEdit}></ButtonDefaut>
          <ButtonDefaut
            title={'Descartar alterações'}
            variant={'Danger'}
            onPress={handlePressExclude}></ButtonDefaut>
        </InternalContainer>
      </ExternalContainer>
    </ExternalScroll>
  );
}

export default Edit;
