import * as React from 'react';
import {EventErrorsScreen} from '../screens/EventErrorsScreen';
import {BoundaryErrorsScreen} from '../screens/BoundaryErrorsScreen';
import {SSRErrorsScreen} from '../screens/SSRErrorsScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerBackTitle: 'Back'}}>
        <Stack.Screen name="Event Errors" component={EventErrorsScreen} />
        <Stack.Screen name="Boundary Errors" component={BoundaryErrorsScreen} />
        <Stack.Screen name="SSR Errors" component={SSRErrorsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
