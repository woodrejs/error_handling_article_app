import React from 'react';
import styled from 'styled-components/native';
import {Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useNotifications} from 'react-native-notificated';

export const EventErrorsScreen = () => {
  const {navigate} = useNavigation();
  const {notify} = useNotifications();

  const throwError = () => {
    try {
      throw new Error('Error description');
    } catch (error) {
      notify('customNotification', {
        params: {
          customTitle: 'Error title',
          customDescription: error.message,
        },
      });
    }
  };

  return (
    <Container>
      <Button title="Throw Event Error" onPress={throwError} />
      <Button title="Go to SSR Errors" onPress={() => navigate('SSR Errors')} />
      <Button
        title="Go to Boundary Errors"
        onPress={() => navigate('Boundary Errors')}
      />
    </Container>
  );
};

const Container = styled.View`
  height: 100%;
  justify-content: center;
  align-items: center;
`;
