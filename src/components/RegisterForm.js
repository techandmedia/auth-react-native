import React, { Component } from "react";
import firebase from 'firebase';
import styled from "styled-components";
import { Button, Card, CardSection, Input } from "./common";

export default class LoginForm extends Component {
  state = { email: "", password: "" };

  onButtonPress() {
    const { email, password } = this.state;

    firebase.auth().createUserWithEmailAndPassword(email, password);
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="user@email.com"
            label="Email"
            value={this.state.email}
            onChangeInput={email => this.setState({ email })}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry // sama dengan secureTextEntry={true}, default nya begini
            placeholder="password"
            label="Password"
            value={this.state.password}
            onChangeInput={password => this.setState({ password })}
          />
        </CardSection>

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)} loginText="Register" />
        </CardSection>
      </Card>
    );
  }
}
