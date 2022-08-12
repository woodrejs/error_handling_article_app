import React from 'react';
import {CustomNotification} from '../components/CustomNotification';
import {
  createNotifications,
  ZoomInDownZoomOutUp,
} from 'react-native-notificated';

const {NotificationsProvider} = createNotifications({
  variants: {
    customNotification: {
      component: CustomNotification,
      config: {
        notificationPosition: 'top',
        duration: 5000,
        animationConfig: ZoomInDownZoomOutUp,
      },
    },
  },
  isNotch: true,
});

export const NotifyProvider = ({children}) => {
  return <NotificationsProvider>{children}</NotificationsProvider>;
};
