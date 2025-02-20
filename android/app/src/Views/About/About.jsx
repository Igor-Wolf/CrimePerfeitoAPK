import React from 'react';
import { Container, ContainerTitle, FontTitle, NormalText } from './styles';

function About({navigation, route}) {
    return (
        <>
        <ContainerTitle>
            <FontTitle>
                Crime Perfeito
            </FontTitle>
        </ContainerTitle>
        <Container>

            <NormalText>
                Crime Perfeito é um projeto fictício, criado com o propósito de desenvolvimento proficional e academico. Todos os direitos são reservados ao desenvolvedor Igor Barbosa, ou IB.
            </NormalText>
        </Container>
        </>
       
  )
}



export default About;