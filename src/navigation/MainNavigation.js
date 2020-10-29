import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
import {Welcome} from '../screens/login';
import {Home} from '../screens/dashboard';

import {Bottomtab} from './Bottomtab';

export class MainNavigation extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Bottomtab"
            component={Bottomtab}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
