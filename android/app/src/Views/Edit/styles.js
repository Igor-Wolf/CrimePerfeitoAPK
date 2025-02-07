import styled from "styled-components";


export const ImageCard = styled.Image`
  width: 95%; /* Defina o tamanho da imagem */
  height: 250px; /* Defina o tamanho da imagem */
  border-radius: 10px; /* Se desejar bordas arredondadas */
  margin-top: 10px;
  margin-bottom: 10px;
  border: 1px solid;
`;

export const PricesCard = styled.View`

    display: flex;
    flex-direction: column;
    padding: 5px;
    

`

export const ExternalContainer = styled.View`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom:10px;

`
export const ExternalScroll = styled.ScrollView`

    display: flex;
    
`
export const InternalContainer = styled.View`

    display: flex;
    flex-direction: column;
    width: 95%;
    

`

export const TitleText = styled.Text`

    font-size: 18px;
    font-weight: 600;
    color: black;
    padding: 5px;


`
export const NormalText = styled.Text`

    font-size: 15px;
    color: black;
    padding: 5px;


`
export const BoldText = styled.Text`

    font-size: 15px;
    font-weight: 600;
    color: black;
    padding: 5px;
    margin-right: 10px;


`

export const ImputNumber = styled.TextInput`
  width:100%;
  background-color: white;
  margin-bottom: 10px;
  border-radius: 5px;
  font-size: 16px;
  border: 1px solid black;
  color: black;


`
export const ImputDescription = styled.TextInput`
  width:100%;
  background-color: white;
  margin-bottom: 10px;
  border-radius: 5px;
  font-size: 16px;
  border: 1px solid black;
  text-align-vertical: top;
    overflow-y: hidden;
  height:100px;
  color: black;

  


`
export const ImputNumberPrices = styled.TextInput`
width:70%;
  background-color: white;
  margin-bottom: 10px;
  border-radius: 5px;
  font-size: 16px;
  border: 1px solid black;
  color: black;



`