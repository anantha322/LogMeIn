import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {enableScreens} from 'react-native-screens';

import {StartScreen, DetailScreen} from '../containers';

enableScreens();
const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator mode="modal" initialRouteName="Home">
        <Stack.Screen name={'Home'} component={StartScreen} />
        <Stack.Screen
          name={'Details'}
          component={DetailScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
