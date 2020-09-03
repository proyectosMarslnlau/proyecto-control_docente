import React from 'react';

import {View, Text, StyleSheet} from 'react-native';
//Importamos el navigation container
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
//------------------------------------------------------------------
import Splash from '../screen/Splash';
import Login from '../screen/Login';
import Form from '../screen/Form';
import About from '../screen/About';

//--------------------------------------------------------
//Creamos el STACL NAVIGATION
const Stack = createStackNavigator();

const Navigation = () => {
  const config = {
    animation: 'restDisplacementThreshold',
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };
  const forFade = ({current}) => ({
    cardStyle: {
      opacity: current.progress,
    },
  });
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {}
        <Stack.Screen
          name="login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="splash"
          component={Splash}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="form"
          component={Form}
          options={{
            headerShown: false,
            cardStyleInterpolator: forFade,
          }}
        />
        <Stack.Screen
          name="about"
          component={About}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
