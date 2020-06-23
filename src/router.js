import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from "./views/home";

const Stack = createStackNavigator()

const Root = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name={'Home'} component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Root