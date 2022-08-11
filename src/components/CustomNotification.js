import React from 'react';
import styled from 'styled-components/native';

export const CustomNotification = ({customTitle, customDescription}) => {
  return (
    <Container>
      <Icon source={require('../assets/error.png')} />
      <Box>
        <Title>{customTitle}</Title>
        <Description>{customDescription}</Description>
      </Box>
    </Container>
  );
};

const Container = styled.View`
  background-color: #e63946;
  padding: 20px;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
`;
const Box = styled.View`
  margin-left: 20px;
`;
const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  text-transform: capitalize;
  color: #00171f;
`;
const Description = styled.Text`
  font-size: 14px;
  color: #00171f;
`;
const Icon = styled.Image`
  height: 45px;
  width: 45px;
`;
