import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigations from './StackNavigations';

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <StackNavigations />
    </NavigationContainer>
  );
}

