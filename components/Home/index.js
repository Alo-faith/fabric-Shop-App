import React from "react";

// Styling
import logo from "../../media/logo.png";
import { HomeBackground, ButtonStyled } from "./styles";

const Home = ({ navigation }) => {
  return (
    <>
      <HomeBackground source={logo}></HomeBackground>
      <ButtonStyled onPress={() => navigation.navigate("Shops")}>
        Click here to skip
      </ButtonStyled>
    </>
  );
};

export default Home;
