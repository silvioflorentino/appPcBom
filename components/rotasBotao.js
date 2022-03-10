import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Hardware from './hardware';
import Home from './home';
import Software from './software';

const Stack = createStackNavigator();

export default function rotasBotao(){
  return(
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='Software' component={Software}/>
            <Stack.Screen name='Hardware' component={Hardware}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}

