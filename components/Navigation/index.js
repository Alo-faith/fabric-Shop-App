import React from "react";
import Home from "../Home";
import ShopList from "../ShopList";
import FabricList from "../FabricList";
import { createStackNavigator } from "@react-navigation/stack";
import CartList from "../../components/CartList";
const { Navigator, Screen } = createStackNavigator();
import CartButton from "../../components/buttons/CartButton";
import Signin from "../authentication/Signin";
import Signup from "../authentication/Signup";

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
        options={{ title: "Choose a Shop", headerRight: () => <CartButton /> }}
      />
      <Screen
        name="Fabrics"
        component={FabricList}
        options={({ route }) => {
          const { shop } = route.params;
          return {
            title: shop.name,
            headerRight: () => <CartButton />,
          };
        }}
      />
      <Screen name="Cart" component={CartList} />
      <Screen
        name="Signin"
        component={Signin}
        options={{ headerShown: false }}
      />

      <Screen
        name="Signup"
        component={Signup}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
};
export default RootNavigator;
