import React from "react";
import CartButtonStyled from "./styles";
import { Icon, Button, Text } from "native-base";
import cartStore from "../../stores/cartStore";
import { observer } from "mobx-react";
import { useNavigation } from "@react-navigation/native";

const CartButton = () => {
  const navigation = useNavigation();
  return (
    <Button transparent light onPress={() => navigation.navigate("Cart")}>
      <Text>{cartStore.totalQuantity}</Text>
      <Icon type="MaterialCommunityIcons" name="cart" />
    </Button>
  );
};
export default observer(CartButton);
