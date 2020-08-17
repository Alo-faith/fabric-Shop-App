import React from "react";
import { Text } from "react-native";
import { List, Content, ListItem } from "native-base";

import { ItemStyled } from "./styles";

const FabricItem = ({ item }) => {
  return (
    <ListItem>
      <ItemStyled>{item.name}</ItemStyled>
    </ListItem>
  );
};

export default FabricItem;
