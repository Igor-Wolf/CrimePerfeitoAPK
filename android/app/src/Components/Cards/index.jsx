import React from 'react';
import {CardContainer, CardContainerIntern, ImageCard, PricesCard, TextInternal, TitleText} from './styles';
import {Text, View} from 'react-native';

export const CardItem = ({objectItem, onPress}) => {
  const dataItem = objectItem;

  return (
    <CardContainer onPress={onPress}>
      <ImageCard source={{uri: dataItem.url}}></ImageCard>
      <CardContainerIntern>
        <TitleText>{dataItem.name}</TitleText>

        <PricesCard>
          {dataItem.price.small && (
            <TextInternal>Pequeno: {' R$ ' + dataItem.price.small.toFixed(2)}</TextInternal>
          )}
          {dataItem.price.average && (
            <TextInternal>Médio: {' R$ ' + dataItem.price.average.toFixed(2)}</TextInternal>
          )}
          {dataItem.price.large && (
            <TextInternal>Grande: {' R$ ' + dataItem.price.large.toFixed(2)}</TextInternal>
          )}
          {dataItem.price.unique && (
            <TextInternal>Único: {' R$ ' + dataItem.price.unique.toFixed(2)}</TextInternal>
          )}
        </PricesCard>
      </CardContainerIntern>
    </CardContainer>
  );
};
