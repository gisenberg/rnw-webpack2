import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';
import value from './dependency';

class App extends Component {
  render() {
    return (
      <View>
        <Text>{value}</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('MyApp', () => App);
AppRegistry.runApplication('MyApp', { rootTag: document.getElementById('root') });

