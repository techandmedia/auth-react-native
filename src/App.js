import React, { Component } from "react";
import styled from "styled-components";
import firebase from "firebase";
import { Button, Card, CardSection, Header } from "./components/common";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";

const keys = require("./config/Keys");

export default class App extends Component {
  componentDidMount() {
    firebase.initializeApp({
      apiKey: keys.apiKey,
      authDomain: keys.authDomain,
      databaseURL: keys.databaseURL,
      projectId: keys.projectId,
      storageBucket: keys.storageBucket,
      messagingSenderId: keys.messagingSenderId
    });
  }

  render() {
    return (
      <StyledView>
        <Header headerText="Authentication" />
        <LoginForm />
        {/* <Card>
          <CardSection>
            <Button loginText="Register" />
          </CardSection>
        </Card> */}
      </StyledView>
    );
  }
}

const StyledView = styled.View``;
