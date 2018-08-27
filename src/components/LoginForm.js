import React, { Component } from "react";
import { View, Text, TextInput } from "react-native";
import styled from "styled-components";
import { Button, Card, CardSection, Input } from "./common";

export default class LoginForm extends Component {
  state = { text: "" };

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            value={this.state.text}
            onChangeText={text => this.setState({ text })}
            underlineColorAndroid="#fff"
          />
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

