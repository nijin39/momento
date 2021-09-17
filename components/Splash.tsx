import React from "react";

import { Image, View } from "react-native";
import { SplashContainer, SplashLogo } from "../styles/appStyles";

const Splash = () => {
  return (
    <SplashContainer>
      <SplashLogo source={require("../assets/splash_logo.png")} />
    </SplashContainer>
  );
};

export default Splash;
