import styled from "styled-components";


export const CardContainer = styled.TouchableOpacity`

    display: flex;
    flex-direction: row;    
    padding: 10px;
    border: 1px solid black;
    elevation: 5;
    height: 150px;
    align-items: center;
    background-color: white;

`
export const CardContainerIntern = styled.View`

    display: flex;
    flex-direction: column;

`




export const ImageCard = styled.Image`
  width: 120px; /* Defina o tamanho da imagem */
  height: 120px; /* Defina o tamanho da imagem */
  border-radius: 10px; /* Se desejar bordas arredondadas */
`;


export const PricesCard = styled.View`

    display: flex;
    flex-direction: column;
    padding: 5px;

`

export const TitleText = styled.Text`

    font-size: 18px;
    font-weight: 600;
    color: black;
    padding: 5px;


`
export const TextInternal = styled.Text`

    font-weight: 600;
    color: black;
    padding: 5px;


`