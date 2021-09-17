import React, { useState, useEffect } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { Image, View, Button } from "react-native";
import { SplashContainer, SplashLogo } from "../styles/appStyles";

const Splash = ({ navigation }) => {

  useEffect(() => {
    setTimeout( () => {
      navigation.navigate('Home');
    }, 3000);   
  }, []);

  return (
    <SplashContainer>
      <SplashLogo source={require("../assets/splash_logo.png")} />
    </SplashContainer>
  );
};

export default Splash;
