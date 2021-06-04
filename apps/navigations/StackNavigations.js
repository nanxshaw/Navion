import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/views/Home';

const Stack = createStackNavigator();
export default StackNavigations = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    );
}

