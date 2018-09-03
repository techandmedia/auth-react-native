import React, { Component } from "react";
import styled from "styled-components";
import Firebase from "./config/Firebase";
import { Button, Card, CardSection, Header } from "./components/common";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";

// const keys = require("./config/Firebase");

export default class App extends Component {
  componentWillMount() {
    Firebase;
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
