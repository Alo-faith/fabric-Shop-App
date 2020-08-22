import React, { useState } from "react";
import { Text } from "react-native";
import { ListItem, Right, Left, Body } from "native-base";
import { TotalPrice, TrashIcon } from "./styles";
import cartStore from "../../stores/cartStore";
import NumericInput from "react-native-numeric-input";
import { observer } from "mobx-react";

const CartItem = ({ item }) => {
  const [quantity, setQuantity] = useState(item.quantity);
  item.quantity = quantity;
  const handleAdd = () => {
    const newItem = { quantity, itemId: item.id };
    cartStore.addItem(newItem);
  };
  return (
    <ListItem>
      <Left>
        <Left>
          <Text>{item.name}</Text>
          <Text note>
            {item.price} KD x {item.quantity}
          </Text>
          <TotalPrice>{item.price * item.quantity} KD</TotalPrice>
        </Left>
      </Left>

      <Body>
        <Right>
          <NumericInput
            rounded
            value={quantity}
            onChange={setQuantity}
            totalHeight={30}
            totalWidth={60}
            minValue={1}
            initValue={item.quantity}
            onPress={handleAdd()}
          />
        </Right>
      </Body>
      <Right>
        <TrashIcon
          name="trash"
          type="Ionicons"
          onPress={() => cartStore.removeItemFromCart(item.id)}
        />
      </Right>
    </ListItem>
  );
};

export default observer(CartItem);
