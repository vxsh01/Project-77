import { StackView } from "@react-navigation/stack";
import react from "react";
import DailyPicScreen from "./screens/DailyPic";
import HomeScreen from "./screens/HomeScreen";
import SpaceCraftsScreen from "./screens/SpaceCrafts";
import StarMapScreen from "./screens/StarMap";
import React, { Component } from 'react'

export default class App extends Component{
  render(){
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{
          headShown: false
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SpaceCrafts" component={SpaceCraftsScreen} />
        <Stack.Screen name="DailyPic" component={DailyPicScreen} />
        <Stack.Screen name="StarMap" component={StarMapScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}