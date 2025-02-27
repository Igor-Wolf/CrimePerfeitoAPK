import styled from "styled-components";

export const Container = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    padding:8px;
    background-color: orange;
    flex: 1;



`


export const NormalText = styled.Text`

    font-size: 18px;
    color: black;
    padding: 5px;
    text-align: justify;
    font-weight: 700;


`

export const ContainerTitle = styled.View`
  display:flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: red;
  
`;


export const FontTitle = styled.Text`

font-family: 'DancingScript-Bold';
  font-size: 35px;
  font-weight: 600;
  color: #fff; /* Cor do texto */

  text-shadow-color: #fff; 
  text-shadow-offset: 0 0;  /* Primeira sombra */
  text-shadow-radius: 5px;

  /* Segunda camada da sombra (mais intensa e azul) */
  text-shadow-color: #0054ff;
  text-shadow-offset: 0 0;
  text-shadow-radius: 10px;

  /* Terceira camada da sombra (mais intensa e azul) */
  text-shadow-color: #0054ff;
  text-shadow-offset: 0 0;
  text-shadow-radius: 15px;

`