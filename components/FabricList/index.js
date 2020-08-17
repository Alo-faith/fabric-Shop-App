import React, { useState } from "react";
import { observer } from "mobx-react";
import { Text } from "react-native";
import { Content, List, Spinner } from "native-base";

// component
import FabricItem from "./Fabricitem";
// style

// store
import itemStore from "../../stores/itemStore";

const FabricList = ({ navigation, route }) => {
  if (itemStore.loading) return <Text>loading</Text>;
  const { shop } = route.params;

  const itemsList = shop.fabrics
    .map((item) => itemStore.getItemById(item.id))
    .map((item) => <FabricItem item={item} key={item.id} />);

  return (
    <Content>
      <List>{itemsList}</List>
    </Content>
  );
};

export default observer(FabricList);
