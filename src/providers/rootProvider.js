import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import {AxiosInterceptorProvider} from './axiosInterceptorProvider';
import {NotifyProvider} from './notifyProvider';

const queryClient = new QueryClient();

export const RootProvider = ({children}) => {
  return (
    <NotifyProvider>
      <AxiosInterceptorProvider>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </AxiosInterceptorProvider>
    </NotifyProvider>
  );
};
