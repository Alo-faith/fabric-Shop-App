import React, { useState } from "react";

import {
  ListItem,
  Thumbnail,
  Left,
  Right,
  Button,
  Text,
  body,
  Body,
} from "native-base";
import NumericInput from "react-native-numeric-input";
import { ItemStyled } from "./styles";
import itemStore from "../../stores/itemStore";
import cartStore from "../../stores/cartStore";

const FabricItem = ({ item }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    const newItem = { quantity, itemId: item.id };
    cartStore.addItem(newItem);
  };

  return (
    <ListItem>
      <Left>
        <Thumbnail
          source={{
            uri: item.image || "",
          }}
        />
        <Left>
          <ItemStyled>{item.name}</ItemStyled>
          <Text note>{item.price} Kd /meter</Text>
        </Left>
      </Left>

      <Right>
        <NumericInput
          rounded
          value={quantity}
          onChange={setQuantity}
          totalHeight={30}
          totalWidth={60}
          initValue={1}
        />
        <Button transparent onPress={handleAdd}>
          <Text>Add</Text>
        </Button>
      </Right>
    </ListItem>
  );
};

export default FabricItem;
