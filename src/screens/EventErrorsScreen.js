import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, StyleSheet, Button} from 'react-native';
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
    <View style={styles.container}>
      <Button title="Throw Event Error" onPress={throwError} />
      <Button title="Go to SSR Errors" onPress={() => navigate('SSR Errors')} />
      <Button
        title="Go to Boundary Errors"
        onPress={() => navigate('Boundary Errors')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
});
