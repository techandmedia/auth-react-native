import React, {Component} from 'react';
import styled from 'styled-components';
import firebase from "firebase";
import { Header } from "./components/common";
import LoginForm from "./components/LoginForm";

export default class App extends Component {
  
  render() {
    return (
      <StyledView>
        <Header headerText="Authentication" />
        <LoginForm />
      </StyledView>
    );
  }
}

const StyledView = styled.View``