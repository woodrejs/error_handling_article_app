import React from 'react';
import {RootProvider} from './providers/rootProvider';
import {RootNavigator} from './navigators/rootNavigator';
import {SafeAreaView, StyleSheet} from 'react-native';

export const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <RootProvider>
        <RootNavigator />
      </RootProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});
