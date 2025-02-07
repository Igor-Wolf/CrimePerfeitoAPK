import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  FlatList,
  Alert,
  ActivityIndicator,
  Text,
} from 'react-native';

import Icon from '@react-native-vector-icons/fontawesome';
import {
  Categories,
  ContainerTitle,
  Create,
  FontTitle,
  Lista,
  ScrollableCategory,
  ScrollableContent,
  Search,
  TitleText,
} from './styles';
import {CardItem} from '../../Components/Cards';
import {api} from '../../service/api';

function Home({navigation}) {
  const [categoryFood, setCategoryFood] = useState('');
  const [data, setData] = useState([]); // Inicializando com um array vazio
  const [loading, setLoading] = useState(true);

  const category = [
    {name: 'Pizza'},
    {name: 'Lanche'},
    {name: 'Salada'},
    {name: 'Porção'},
    {name: 'Bebida'},
  ];

  const req = async () => {
    try {
      const response = await api.get('/food'); // retornando todo o banco de dados
      return response.data;
    } catch (error) {
      Alert.alert(
        'Erro na requisição',
        error.message || 'Tente novamente mais tarde',
      );
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await req();
      setData(response || []);
      setLoading(false);
    };

    fetchData();
  }, []);

  const handlePressCreate = () => {
    navigation.navigate('CreateProduct');
  };

  const handlePressSearchProducts = () => {

    navigation.navigate('SearchProducts');


  }
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'orange'}}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <>
          <Create onPress={handlePressCreate}>
            <Icon name="plus" size={40} color="#6dc724" />
          </Create>
          <Search onPress={handlePressSearchProducts}>
            <Icon name="search" size={40} color="#000000" />
          </Search>
          <ContainerTitle>
            <FontTitle>Crime Perfeito</FontTitle>
          </ContainerTitle>
          <ScrollableCategory>
            <FlatList
              horizontal={true}
              data={category}
              renderItem={({item}) => (
                <Categories
                  onPress={() => setCategoryFood(item.name)}
                  style={
                    categoryFood === item.name ? {backgroundColor: '#ddd'} : {}
                  }>
                  <TitleText>{item.name}</TitleText>
                </Categories>
              )}
              keyExtractor={item => item.name}
              showsHorizontalScrollIndicator={false}
            />
          </ScrollableCategory>
          <ScrollableContent>
            <Lista
              data={
                categoryFood === ''
                  ? data
                  : data.filter(item => item.category === categoryFood)
              }
              renderItem={({item}) => (
                <CardItem
                  objectItem={item}
                  onPress={() => navigation.navigate('Details', {item: item})}
                />
              )}
              keyExtractor={item => item._idreal}
            />
          </ScrollableContent>
        </>
      )}
    </SafeAreaView>
  );
}

export default Home;
