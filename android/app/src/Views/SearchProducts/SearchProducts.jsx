import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  FlatList,
  Alert,
  ActivityIndicator,
  Text,
  RefreshControl,
} from 'react-native';

import Icon from '@react-native-vector-icons/fontawesome';
import {
  Categories,
  ContainerTitle,
  Create,
  FontTitle,
  ImputNumber,
  Lista,
  ScrollableCategory,
  ScrollableContent,
  Search,
  SearchMin,
  TitleText,
} from './styles';
import {CardItem} from '../../Components/Cards';
import {api} from '../../service/api';

function SearchProducts({navigation}) {
  const [data, setData] = useState([]); // Inicializando com um array vazio
  const [loading, setLoading] = useState(false);
  const [foodName, setFoodName] = useState(null);

  const req = async () => {
    try {
      const response = await api.get(`/food/name/${foodName}`); // retornando todo o banco de dados
      setData(response.data || []);
      setLoading(false);
    } catch (error) {
      Alert.alert(
        'Erro na requisição',
        error.message || 'Tente novamente mais tarde',
      );
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {};

    fetchData();
  }, []);

  const handlePressCreate = () => {
    navigation.navigate('Create');
  };
  const handlePressSearchProducts = async () => {
    setLoading(true);
    await req();
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'orange'}}>
      <Create onPress={handlePressCreate}>
        <Icon name="plus" size={40} color="#6dc724" />
      </Create>
      <ContainerTitle>
        <FontTitle>Crime Perfeito</FontTitle>
      </ContainerTitle>
      <ScrollableCategory>
        <ImputNumber
          value={foodName}
          onChangeText={setFoodName}
          keyboardType="default"
          placeholder="Digite o nome do prato"
        />

        <SearchMin onPress={handlePressSearchProducts}>
          <Icon name="search" size={30} color="#000000" />
        </SearchMin>
      </ScrollableCategory>
      <ScrollableContent>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <>
            <Lista
              refreshControl={
                <RefreshControl refreshing={loading} onRefresh={req} />
              }
              data={data}
              renderItem={({item}) => (
                <CardItem
                  objectItem={item}
                  onPress={() => navigation.navigate('Details', {item: item})}
                />
              )}
              keyExtractor={item => item._idreal}
            />
          </>
        )}
      </ScrollableContent>
    </SafeAreaView>
  );
}

export default SearchProducts;
