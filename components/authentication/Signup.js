import React, { useState } from "react";

// Styling

import {
  AuthContainer,
  AuthTitle,
  AuthTextInput,
  AuthButtonText,
  AuthButton,
  AuthButtonText2,
  AuthButton2,
} from "./styles";

// Store
import authStore from "../../stores/authStore";
import Feather from "react-native-vector-icons/Feather";
import { TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";
import { Text } from "native-base";

const Signup = ({ navigation }) => {
  const [user, setUser] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [isValidUser, setValid] = useState(true);
  const [showPass, setShowPass] = useState(false);
  const updateShowPass = () => {
    setShowPass(!showPass);
  };
  const handleSubmit = async () => {
    await authStore.signup(user);
    if (authStore.user) navigation.navigate("Shops");
    else {
      setValid(false);
    }
  };

  return (
    <AuthContainer>
      <AuthTitle>Sign up</AuthTitle>
      <AuthTextInput
        onChangeText={(username) => setUser({ ...user, username })}
        placeholder="Username"
        placeholderTextColor="#A6AEC1"
        autoCapitalize="none"
      />

      <AuthTextInput
        onChangeText={(firstName) => setUser({ ...user, firstName })}
        placeholder="firstName"
        placeholderTextColor="#A6AEC1"
      />
      <AuthTextInput
        onChangeText={(email) => setUser({ ...user, email })}
        placeholder="email"
        placeholderTextColor="#A6AEC1"
      />
      <AuthTextInput
        onChangeText={(lastName) => setUser({ ...user, lastName })}
        placeholder="lastName"
        placeholderTextColor="#A6AEC1"
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

      {!isValidUser ? (
        <Animatable.View animation="fadeInLeft" duration={400}>
          <Text style={{ color: "red" }}>Invalid data </Text>
        </Animatable.View>
      ) : null}

      <AuthButton full>
        <AuthButtonText onPress={handleSubmit}>Sign up</AuthButtonText>
      </AuthButton>
      <AuthButton2 full onPress={() => navigation.navigate("Signin")}>
        <AuthButtonText2>Sign in</AuthButtonText2>
      </AuthButton2>
    </AuthContainer>
  );
};

export default Signup;
