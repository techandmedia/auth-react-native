import React, { Component } from "react";
import { View, Text, TextInput } from "react-native";
import styled from "styled-components";
import { Button, Card, CardSection } from "./common";

export default class LoginForm extends Component {
  render() {
    return (
      <Card>
        <CardSection>
        <StyledTextInput underlineColorAndroid="#fff"/>
        </CardSection>

        <CardSection>
          <Text>Andri</Text>
        </CardSection>

        <CardSection>
          <Button loginText="Log Me in" />
        </CardSection>

      </Card>
    );
  }
}

const StyledTextInput = styled.TextInput`
  width: auto;
  padding-top: -2px;
  padding-bottom: -2px;
  background-color: #fff;
  text-decoration-line: none;
`;
