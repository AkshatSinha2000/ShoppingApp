import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screen/home/home';
import { screen } from './screen';
import Cart from '../screen/cart';

const Stack = createNativeStackNavigator();

export const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={screen.Home}
          component={Home}
          options={{headerShown :false}}
        />
        <Stack.Screen
          name={screen.Cart}
          component={Cart}
          options={{headerShown :false}}
        />
        {/* <Stack.Screen name="Profile" component={} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};