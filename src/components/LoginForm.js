import React, { Component } from "react";
import { View, Text, TextInput } from "react-native";
import styled from "styled-components";
import { Button, Card, CardSection, Input } from "./common";

export default class LoginForm extends Component {
  state = { email: "" };

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="user@email.com"
            label="Email:"
            value={this.state.email}
            onChangeEmail={email => this.setState({ email })}
          />
        </CardSection>

        <CardSection>
          <Text>Andri</Text>
        </CardSection>

        <CardSection>
          <Button loginText="Log Me In" />
        </CardSection>
      </Card>
    );
  }
}

