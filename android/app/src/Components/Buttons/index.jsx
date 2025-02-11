import React from 'react';
import { Text } from 'react-native';
import { ButtonContainer } from './styles';

const ButtonDefaut = ({ variant = 'primary', onPress, title }) => {
    // Definir o background-color inline com base no variant
    let backgroundColor = '';

    switch (variant) {
        case 'primary':
            backgroundColor = 'orange';
            break;
        case 'secondary':
            backgroundColor = 'rgb(0, 123, 255)';
            break;
        case 'tertiary':
            backgroundColor = 'rgb(255, 193, 7)';
            break;
        case 'danger':
            backgroundColor = 'rgb(197, 25, 16)';
            break;
        case 'outline':
            backgroundColor = 'transparent'; // Para outline, a cor de fundo é transparente
            break;
        default:
            backgroundColor = 'rgb(187, 14, 14)'; // Cor padrão
    }

    return (
        <ButtonContainer
            style={{ backgroundColor }} // Aplicando o background-color inline
            onPress={onPress}
        >
            <Text style={{ color: variant === 'outline' ? 'rgb(255, 255, 254)' : 'black', fontWeight: 700, fontSize: 18}}>
                {title}
            </Text>
        </ButtonContainer>
    );
};

export { ButtonDefaut };
