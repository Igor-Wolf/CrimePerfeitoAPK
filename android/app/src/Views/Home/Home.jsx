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
  Lista,
  ScrollableCategory,
  ScrollableContent,
  Search,
  TitleText,
} from './styles';
import {CardItem} from '../../Components/Cards';
import {api} from '../../service/api';
import {CommonActions} from '@react-navigation/native';

function Home({navigation}) {
  const [categoryFood, setCategoryFood] = useState('');
  const [data, setData] = useState([]); // Inicializando com um array vazio
  const [loading, setLoading] = useState(false);

  const category = [
    {name: 'Pizza'},
    {name: 'Lanche'},
    {name: 'Salada'},
    {name: 'Porção'},
    {name: 'Bebida'},
  ];

  const req = async () => {
    try {
      setLoading(true);
      const response = await api.get('/food'); // retornando todo o banco de dados
      setData(response.data || []);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      Alert.alert(
        'Erro na requisição',
        error.message || 'Tente novamente mais tarde',
      );
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await req();
    };

    fetchData();
  }, []);
  
  //Reseta a navegação ao chegar na view HOME
  navigation.dispatch((state) => {
    // Remove all the screens after `Profile`
    const index = state.routes.findIndex((r) => r.name === 'Home');
    const routes = state.routes.slice(0, index + 1);
  
    return CommonActions.reset({
      ...state,
      routes,
      index: routes.length - 1,
    });
  });
  const handlePressCreate = () => {
    navigation.navigate('Create');
  };
  
  const handlePressSearchProducts = () => {
    navigation.navigate('Search');
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'orange'}}>
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
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <>
          <ScrollableContent>
            <Lista
              refreshControl={
                <RefreshControl refreshing={loading} onRefresh={req} />
              }
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
