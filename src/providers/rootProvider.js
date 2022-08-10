import React from 'react';
import {StyleSheet} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {QueryClient, QueryClientProvider} from 'react-query';
import {AxiosInterceptorProvider} from './axiosInterceptorProvider';
import {NotifiactionsProvider} from './notificationsProvider';

const queryClient = new QueryClient();

export const RootProvider = ({children}) => {
  return (
    <NotifiactionsProvider>
      <GestureHandlerRootView style={styles.container}>
        <AxiosInterceptorProvider>
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </AxiosInterceptorProvider>
      </GestureHandlerRootView>
    </NotifiactionsProvider>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});
