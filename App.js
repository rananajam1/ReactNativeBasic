import React, { useReducer } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Users from './screens/Users'
import Photos from './screens/Photos'
import Albums from './screens/Albums'

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Users" >
        <Stack.Screen name="Users" component={Users} />
        <Stack.Screen name="Photos" component={Photos} />
        <Stack.Screen name="Albums" component={Albums} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;