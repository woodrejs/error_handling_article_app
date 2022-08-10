import React from 'react';
import {CustomNotification} from '../components/CustomNotification';
import {createNotifications} from 'react-native-notificated';

const {NotificationsProvider} = createNotifications({
  variants: {
    customNotification: {
      component: CustomNotification,
      config: {
        notificationPosition: 'top',
        duration: 5000,
      },
    },
  },
  isNotch: true,
});

export const NotifiactionsProvider = ({children}) => {
  return <NotificationsProvider>{children}</NotificationsProvider>;
};
