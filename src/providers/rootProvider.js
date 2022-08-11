import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import {AxiosInterceptorProvider} from './axiosInterceptorProvider';
import {NotifiactionsProvider} from './notificationsProvider';

const queryClient = new QueryClient();

export const RootProvider = ({children}) => {
  return (
    <NotifiactionsProvider>
      <AxiosInterceptorProvider>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </AxiosInterceptorProvider>
    </NotifiactionsProvider>
  );
};
