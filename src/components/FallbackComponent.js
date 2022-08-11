import React from 'react';
import styled from 'styled-components/native';
import {Button} from 'react-native';

export const FallbackComponent = props => {
  return (
    <Container>
      <Icon source={require('../assets/error.png')} />
      <Title>Something happened!</Title>
      <Description>{props.error.toString()}</Description>
      <Button title={'Try again'} onPress={() => props.resetError} />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 50px;
`;
const Icon = styled.Image`
  height: 45px;
  width: 45px;
`;
const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  text-transform: capitalize;
  color: #00171f;
  text-align: center;
  margin-top: 10px;
`;
const Description = styled.Text`
  font-size: 14px;
  color: #00171f;
  text-align: center;
  margin-top: 10px;
`;
