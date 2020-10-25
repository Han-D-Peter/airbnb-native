import React, { useState } from "react";
import { View, Text, StatusBar } from "react-native";
import styled from "styled-components/native";
import Btn from "../../components/Auth/Btn";
import DismissKeyboard from "../../components/DismissKeyboard";
import Input from "./Input";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const InputContainer = styled.View`
  margin-bottom: 30px;
`;

export default ({ props: { params } }) => {
  const [username, setUsername] = useState(params?.email);
  const [password, setPassword] = useState(params?.password);
  const handleSubmit = () => alert(username);
  return (
    <DismissKeyboard>
      <Container>
        <StatusBar barStyle="dark-content" />
        <InputContainer>
          <Input
            value={email}
            placeholder="Username"
            autoCapitalize="none"
            stateFn={setUsername}
          />
          <Input
            value={password}
            placeholder="Password"
            isPassword={true}
            stateFn={setPassword}
          />
        </InputContainer>
        <Btn text={"Sign In"} accent onPress={handleSubmit}></Btn>
      </Container>
    </DismissKeyboard>
  );
};
