import React, { Component } from "react";
import Firebase from "../config/Firebase";
import styled from "styled-components";
import { Button, Card, CardSection, Input } from "./common";

export default class LoginForm extends Component {
  state = { email: "", password: "", error: "" };

  onLogin() {
    const { email, password } = this.state;
    Firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(() => {
        Firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .catch(() => {
            this.setState({ error: "Authentication Failed!" });
          });
      });
  }

  onRegister() {
    const { email, password } = this.state;
    Firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(() => {
        this.setState({ error: "Authentication Failed!" });
      });
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
          <Button onPress={this.onLogin.bind(this)} buttonText="Log Me In" />
        </CardSection>
        <CardSection>
          <Button onPress={this.onRegister.bind(this)} buttonText="Register" />
        </CardSection>
      </Card>
    );
  }
}
