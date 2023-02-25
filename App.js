import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as MediaLibrary from "expo-media-library";

import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import PaymentScreen from './screens/PaymentScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  React.useEffect(() => {
    (async () => {
      MediaLibrary.requestPermissionsAsync();
    })
  })
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Scan your Bill'}}
        />

        <Stack.Screen 
          name="Details" 
          component={DetailsScreen} 
          options={{title: 'Split Bill Details'}}
        />

        <Stack.Screen 
          name="Payment" 
          component={PaymentScreen} 
          options={{title: 'Payment'}}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

