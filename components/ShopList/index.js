import React from "react";
import { observer } from "mobx-react";
import { View, Text } from "react-native";
import { Content, List, Spinner } from "native-base";

// Store
import shopStore from "../../stores/shopStore";

// component
import ShopItem from "./ShopItem";

const ShopList = ({ navigation }) => {
  if (shopStore.loading) return <Spinner />;

  const shopList = shopStore.shops.map((shop) => (
    <ShopItem shop={shop} key={shop.id} navigation={navigation} />
  ));
  return (
    <Content>
      <List>{shopList}</List>
    </Content>
  );
};
export default observer(ShopList);
