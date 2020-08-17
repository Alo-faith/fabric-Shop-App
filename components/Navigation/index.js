import { StatusBar } from "expo-status-bar";
import React from "react";
import Home from "../Home";
import ShopList from "../ShopList";
import FabricList from "../FabricList";
import { createStackNavigator } from "@react-navigation/stack";

const { Navigator, Screen } = createStackNavigator();

const RootNavigator = () => {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "#90d4ed",
        },
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Screen
        name="Shops"
        component={ShopList}
        options={{ title: "Choose a Shop" }}
      />
      <Screen
        name="Fabrics"
        component={FabricList}
        options={({ route }) => {
          const { shop } = route.params;
          return {
            title: shop.name,
          };
        }}
      />
    </Navigator>
  );
};
export default RootNavigator;
