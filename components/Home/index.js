import React from "react";

// Styling
import logo from "../../media/logo2.jpg";
import { HomeBackground, TopStyling, Title } from "./styles";
import authStore from "../../stores/authStore";
import { observer } from "mobx-react";

const Home = ({ navigation }) => {
  return (
    <HomeBackground source={logo}>
      {!authStore.user ? (
        <TopStyling>
          <Title onPress={() => navigation.navigate("Shops")}>
            Click here to skip
          </Title>

          <Title
            style={{ color: "blue" }}
            onPress={() => navigation.navigate("Signin")}
          >
            Sign in
          </Title>
        </TopStyling>
      ) : (
        <TopStyling>
          <Title
            style={{ color: "blue" }}
            onPress={() => navigation.navigate("Signin")}
          >
            Enter
          </Title>
        </TopStyling>
      )}
    </HomeBackground>
  );
};

export default observer(Home);
