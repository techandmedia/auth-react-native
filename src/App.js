import React, {Component} from 'react';
import { Text, View } from 'react-native';
import firebase from "firebase";
import { Header } from "./components/common";
import LoginForm from "./components/LoginForm";

export default class App extends Component {
  // componentDidMount() {
  //   firebase.initializeApp({
  //     apiKey: "AIzaSyDSknJs2RjnXkpDiRpm-tcGv3RaqeT033c",
  //     authDomain: "react-native-auth-6cbcd.firebaseapp.com",
  //     databaseURL: "https://react-native-auth-6cbcd.firebaseio.com",
  //     projectId: "react-native-auth-6cbcd",
  //     storageBucket: "react-native-auth-6cbcd.appspot.com",
  //     messagingSenderId: "694994971326"
  //   });
  // }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}