import React, { useCallback, useEffect, useState } from "react";
import { Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as SplashScreen from "expo-splash-screen";
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
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return (
                <Image
                  source={require("./assets/icons/home_activate.png")}
                  style={{ width: 30, height: 30 }}
                />
              );
            } else {
              return (
                <Image
                  source={require("./assets/icons/home_deactivate.png")}
                  style={{ width: 30, height: 30 }}
                />
              );
            }
          },
        }}
      />
      <Tab.Screen
        name="Pay"
        component={Pay}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return (
                <Image
                  source={require("./assets/icons/pay_activate.png")}
                  style={{ width: 30, height: 30 }}
                />
              );
            } else {
              return (
                <Image
                  source={require("./assets/icons/pay_deactivate.png")}
                  style={{ width: 30, height: 30 }}
                />
              );
            }
          },
        }}
      />
      <Tab.Screen name="Order" component={Order} />
      <Tab.Screen name="Gift" component={Gift} />
      <Tab.Screen name="Other" component={Other} />
    </Tab.Navigator>
  );
};

const Profile = () => {
  return <Text>Profile</Text>;
};

const Pay = () => {
  return <Text>Pay</Text>;
};

const Order = () => {
  return <Text>Order</Text>;
};

const Gift = () => {
  return <Text>Gift</Text>;
};

const Other = () => {
  return <Text>Other</Text>;
};

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();
        // Pre-load fonts, make any API calls you need to do here
        // await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
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
  );
}
