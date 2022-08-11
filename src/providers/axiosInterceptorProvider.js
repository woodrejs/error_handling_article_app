import axios from 'axios';
import {useEffect} from 'react';
import {useNotifications} from 'react-native-notificated';

export const AxiosInterceptorProvider = ({children}) => {
  const {notify} = useNotifications();

  useEffect(() => {
    axios.defaults.baseURL = 'https://rickandmortyapi.com/api';

    const resInterceptor = response => response;
    const errInterceptor = error => {
      if (error.response) {
        notify('customNotification', {
          params: {
            customTitle: `Response error status ${error.response.status}`,
            customDescription: error.message,
          },
        });
      }
      return error;
    };

    const interceptor = axios.interceptors.response.use(
      resInterceptor,
      errInterceptor,
    );

    return () => axios.interceptors.response.eject(interceptor);
  }, [notify]);

  return children;
};
