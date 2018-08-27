import React, {Component} from 'react';
import { Text, View } from 'react-native';
import firebase from "firebase";
import { Header } from "./components/common";
import LoginForm from "./components/LoginForm";

export default class App extends Component {
  
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}