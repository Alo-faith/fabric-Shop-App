import React, { useState } from "react";
import { observer } from "mobx-react";

import { Content, List, Spinner, Text } from "native-base";

// store
import itemStore from "../../stores/itemStore";
import CartItem from "./CartItem";
import cartStore from "../../stores/cartStore";

const CartList = () => {
  if (itemStore.loading) return <Text>Loading</Text>;
  const cartList = cartStore.items
    .map((item) => ({
      ...itemStore.getItemById(item.itemId),
      quantity: item.quantity,
    }))
    .map((item) => <CartItem item={item} key={item.name} />);

  return (
    <Content>
      <List>{cartList}</List>
    </Content>
  );
};

export default observer(CartList);
