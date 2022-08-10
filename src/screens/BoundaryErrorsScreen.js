import React, {useState} from 'react';
import {ErrorBoundary} from 'react-error-boundary';
import {CustomFallback} from '../components/CustomFallback';
import {ComponentWithError} from '../components/ComponentWithError';
import {View, StyleSheet, Button} from 'react-native';
import {useNotifications} from 'react-native-notificated';

export const BoundaryErrorsScreen = () => {
  const [isErrorComponentVisible, setIsErrorComponentVisible] = useState(false);
  const {notify} = useNotifications();

  const errorHandler = error => {
    notify('customNotification', {
      params: {
        customTitle: 'Error title',
        customDescription: error.message,
      },
    });
  };
  const pressHandler = () => setIsErrorComponentVisible(true);

  return (
    <ErrorBoundary onError={errorHandler} FallbackComponent={CustomFallback}>
      <View style={styles.container}>
        <Button title="Throw Error" onPress={pressHandler} />
      </View>
      {isErrorComponentVisible && <ComponentWithError />}
    </ErrorBoundary>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
});
