import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const AppStack = createNativeStackNavigator();

import Home from "../pages/Home";

export default function AppRoutes(){
    return (
        <AppStack.Navigator initialRouteName="Home">
            <AppStack.Screen name="Home" component={Home} options={{}}></AppStack.Screen>
        </AppStack.Navigator>
    );
}