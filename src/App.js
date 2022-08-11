import React from 'react';
import {RootProvider} from './providers/rootProvider';
import {RootNavigator} from './navigators/rootNavigator';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaView, StyleSheet} from 'react-native';

export const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <GestureHandlerRootView style={styles.container}>
        <RootProvider>
          <RootNavigator />
        </RootProvider>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});
