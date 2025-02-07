import React from 'react';
import {CardContainer, ImageCard, PricesCard, TextInternal, TitleText} from './styles';
import {Text, View} from 'react-native';

export const CardItem = ({objectItem, onPress}) => {
  const dataItem = objectItem;

  return (
    <CardContainer onPress={onPress}>
      <ImageCard source={{uri: dataItem.url}}></ImageCard>
      <View>
        <TitleText>{dataItem.name}</TitleText>

        <PricesCard>
          {dataItem.price.small && (
            <TextInternal>Pequeno: {dataItem.price.small.toFixed(2)}</TextInternal>
          )}
          {dataItem.price.average && (
            <TextInternal>Médio: {dataItem.price.average.toFixed(2)}</TextInternal>
          )}
          {dataItem.price.large && (
            <TextInternal>Grande: {dataItem.price.large.toFixed(2)}</TextInternal>
          )}
          {dataItem.price.unique && (
            <TextInternal>Único: {dataItem.price.unique.toFixed(2)}</TextInternal>
          )}
        </PricesCard>
      </View>
    </CardContainer>
  );
};
