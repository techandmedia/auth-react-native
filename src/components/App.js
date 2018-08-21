import React, {Component} from 'react';
import {Text, View} from 'react-native';
import { Header } from "./common"

export default class App extends Component {
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <Text>Andri</Text>
      </View>
    );
  }
}