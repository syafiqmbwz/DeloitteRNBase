import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import List from '../screen/Contact/index';
import Detail from '../screen/Detail';

const Stack = createStackNavigator();

const AppStack = () => (
    <NavigationContainer>
      {
        <Stack.Navigator>
          <Stack.Screen name="Contact List" component={List} />
          <Stack.Screen name="Detail" component={Detail} />
        </Stack.Navigator>
      }
    </NavigationContainer>
);

export default AppStack;
