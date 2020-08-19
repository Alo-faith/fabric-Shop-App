import React from "react";

// Styling
import logo from "../../media/logo2.jpg";
import { HomeBackground, ButtonStyled, TopStyling, Title } from "./styles";
import { View, Text } from "native-base";

const Home = ({ navigation }) => {
  return (
    <HomeBackground source={logo}>
      <ButtonStyled onPress={() => navigation.navigate("Shops")}>
        <TopStyling>
          <Title> Click here to skip </Title>
        </TopStyling>
      </ButtonStyled>
    </HomeBackground>
  );
};

export default Home;
