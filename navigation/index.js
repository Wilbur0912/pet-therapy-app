import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../app/home/HomeScreen';
import PetProfileScreen from '../app/booking/PetProfileScreen';
import BookingFormScreen from '../app/booking/BookingFormScreen';
import BookingSuccessScreen from '../app/booking/BookingSuccessScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function BookingStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="PetProfile" component={PetProfileScreen} />
      <Stack.Screen name="BookingForm" component={BookingFormScreen} />
      <Stack.Screen name="BookingSuccess" component={BookingSuccessScreen} />
    </Stack.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Book" component={BookingStack} options={{ headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
