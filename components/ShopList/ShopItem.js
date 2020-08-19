import React from "react";
import { Text } from "react-native";
import { ShopItemStyled } from "./styles";
import FabricList from "../FabricList";
import { ListItem, Thumbnail } from "native-base";

const ShopItem = ({ shop, navigation }) => {
  return (
    <ListItem onPress={() => navigation.navigate("Fabrics", { shop: shop })}>
      <Thumbnail
        source={{
          uri: shop.image || "",
        }}
      />
      <ShopItemStyled>{shop.name}</ShopItemStyled>
    </ListItem>
  );
};

export default ShopItem;
