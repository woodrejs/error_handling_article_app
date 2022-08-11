import React, {useState} from 'react';
import {ErrorBoundary} from 'react-error-boundary';
import {useNotifications} from 'react-native-notificated';
import {FallbackComponent} from '../components/FallbackComponent';
import {ComponentWithError} from '../components/ComponentWithError';
import {View, StyleSheet, Button} from 'react-native';

export const BoundaryErrorsScreen = () => {
  const [isErrorComponentVisible, setIsErrorComponentVisible] = useState(false);
  const {notify} = useNotifications();

  const onPress = () => setIsErrorComponentVisible(true);
  const onError = error => {
    notify('customNotification', {
      params: {
        customTitle: 'Boundary error',
        customDescription: error.message,
      },
    });
  };

  return (
    <ErrorBoundary {...{onError, FallbackComponent}}>
      <InvokeErrorButton {...{onPress}} />
      {isErrorComponentVisible && <ComponentWithError />}
    </ErrorBoundary>
  );
};

const InvokeErrorButton = ({onPress}) => {
  return (
    <View style={styles.container}>
      <Button {...{title: 'Throw Error', onPress}} />
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
