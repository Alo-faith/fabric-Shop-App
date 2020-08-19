import React, { useState } from "react";
import { observer } from "mobx-react";

import { Content, List, Spinner, Text, View } from "native-base";

// Style
import { CheckButton, CheckButtonText } from "./styles";
// store
import itemStore from "../../stores/itemStore";
import CartItem from "./CartItem";
import cartStore from "../../stores/cartStore";

import authStore from "../../stores/authStore";
const CartList = ({ navigation }) => {
  if (itemStore.loading) return <Text>Loading</Text>;
  const cartList = cartStore.items
    .map((item) => ({
      ...itemStore.getItemById(item.itemId),
      quantity: item.quantity,
    }))
    .map((item) => <CartItem item={item} key={item.name} />);

  const handleCheckout = () => {
    if (authStore.user) cartStore.checkoutCart();
    else {
      navigation.navigate("Signin");
    }
  };

  return (
    <Content>
      <List>{cartList}</List>
      <CheckButton onPress={handleCheckout}>
        <CheckButtonText>
          {authStore.user ? "Checkout" : "Signin to checkout"}
        </CheckButtonText>
      </CheckButton>
    </Content>
  );
};

export default observer(CartList);
