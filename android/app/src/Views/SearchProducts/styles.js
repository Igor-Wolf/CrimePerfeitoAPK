import styled from "styled-components";

export const ContainerTitle = styled.View`
  display:flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: red;
  
`;


export const FontTitle = styled.Text`

  font-size:30px;
  color: white;
  

`

export const ImputNumber = styled.TextInput`
  width:80%;
  background-color: white;
  margin-left: 5px;
  border-radius: 5px;
  font-size: 16px;
  border: 1px solid black;
  color: black;
  placeholderTextColor: black;



`

export const ScrollableContent = styled.View`
    display: flex;
    flex-direction: column;
    flex:1;


`
export const ScrollableCategory = styled.View`
    display: flex;
    flex-direction: row;
    padding: 5px;
    background-color: white;
    justify-content: space-between;
    align-items: center;
    


`

export const Categories = styled.TouchableOpacity`

    display: flex;    
    background-color: orange;
    border-radius: 15px;
    padding: 5px;
    margin: 5px;
    width: 100px;
    align-items: center;
    border: 1px solid black;
`
export const SearchMin = styled.TouchableOpacity`
    
   
    display: flex;
    background-color: wheat;
    border-radius: 15px;
    padding: 5px;
    margin: 5px;
    width: 50px;
    height: 50px;
    align-items: center;
    justify-content:center;
    border: 1px solid black;
    
    elevation: 5;
`
export const Create = styled.TouchableOpacity`
    position: absolute;
    right: 20px;
    bottom: 20px;
    display: flex;
    background-color: wheat;
    border-radius: 15px;
    padding: 5px;
    margin: 5px;
    width: 60px;
    height: 60px;
    align-items: center;
    justify-content:center;
    border: 1px solid black;
    z-index: 2;
    elevation: 5;
`
export const Search = styled.TouchableOpacity`
    position: absolute;
    right: 20px;
    bottom: 90px;
    display: flex;
    background-color: wheat;
    border-radius: 15px;
    padding: 5px;
    margin: 5px;
    width: 60px;
    height: 60px;
    align-items: center;
    justify-content:center;
    border: 1px solid black;
    z-index: 2;
    elevation: 10;
`

export const Lista = styled.FlatList`

    padding-bottom: 20px;

`

export const TitleText = styled.Text`

    font-size: 15px;
    font-weight: 600;
    color: black;
    padding: 5px;


`
