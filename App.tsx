import React, { useEffect } from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "./components/Splash";
import Home from "./components/Home";
import * as font from "expo-font";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeTab"
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="Feed" component={Feed} />
    </Tab.Navigator>
  );
};

const Profile = () => {
  return <Text>Profile</Text>;
};

const Feed = () => {
  return <Text>Feed</Text>;
};

export default function App() {
  useEffect(() => {
    font.loadAsync({
      "notoSans-black": require("./assets/fonts/NotoSansCJKkr-Black.otf"),
      "notoSans-bold": require("./assets/fonts/NotoSansCJKkr-Bold.otf"),
      "notoSans-demiLight": require("./assets/fonts/NotoSansCJKkr-DemiLight.otf"),
      "notoSans-light": require("./assets/fonts/NotoSansCJKkr-Light.otf"),
      "notoSans-medium": require("./assets/fonts/NotoSansCJKkr-Medium.otf"),
      "notoSans-regular": require("./assets/fonts/NotoSansCJKkr-Regular.otf"),
      "notoSans-Thin": require("./assets/fonts/NotoSansCJKkr-Thin.otf"),
    });
  }, []);

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Splash"
            component={Splash}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={HomeTab}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
