import React, { useState } from "react";
import { observer } from "mobx-react";

// Styling
import {
  AuthContainer,
  AuthTitle,
  AuthTextInput,
  AuthButtonText,
  AuthButtonText2,
  AuthButton,
  AuthButton2,
} from "./styles";

import { TouchableOpacity } from "react-native";
// Store
import authStore from "../../stores/authStore";

import Feather from "react-native-vector-icons/Feather";
import { Text } from "native-base";
import * as Animatable from "react-native-animatable";

const Signin = ({ navigation }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    isValidUser: true,
  });
  const [showPass, setShowPass] = useState(false);
  const updateShowPass = () => {
    setShowPass(!showPass);
  };
  const handleSubmit = async () => {
    console.log("1");
    await authStore.signin(user);
    console.log("3");
    if (authStore.user) {
      navigation.replace("Shops");
    } else {
      setUser({ ...(user.isValidUser = false) });
    }
  };

  return (
    <AuthContainer>
      <AuthTitle>Sign in</AuthTitle>
      <AuthTextInput
        onChangeText={(username) => setUser({ ...user, username })}
        placeholder="Username"
        placeholderTextColor="#A6AEC1"
        autoCapitalize="none"
      />

      <AuthTextInput
        onChangeText={(password) => setUser({ ...user, password })}
        placeholder="Password"
        placeholderTextColor="#A6AEC1"
        secureTextEntry={showPass ? false : true}
      />

      <TouchableOpacity onPress={updateShowPass}>
        {!showPass ? (
          <Feather name="eye-off" color="grey" size={15} />
        ) : (
          <Feather name="eye" color="grey" size={15} />
        )}
      </TouchableOpacity>
      {user.isValidUser ? (
        <Text style={{ color: "green" }}> forget password </Text>
      ) : (
        <Animatable.View animation="fadeInLeft" duration={400}>
          <Text style={{ color: "red" }}>Invalid username or password </Text>
        </Animatable.View>
      )}

      <AuthButton full onPress={handleSubmit}>
        <AuthButtonText>Sign in</AuthButtonText>
      </AuthButton>

      <AuthButton2 full onPress={() => navigation.navigate("Signup")}>
        <AuthButtonText2>Sign up</AuthButtonText2>
      </AuthButton2>
    </AuthContainer>
  );
};
export default observer(Signin);
