import React from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

import Dashboard from './containers/Dashboard';

import UserEthereumAddress from './components/UserEthereumAddress';
import PresetHabits from './components/PresetHabits';
import SupervisorEthereumAddress from './components/SupervisorEthereumAddress';


export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      step: 0
    }
  }

  nextScreen = () => {
    this.setState(prevState => ({
      step: prevState.step + 1
    }))
  }

  render() {
    switch(this.state.step) {
      case 0:
        return (
          <UserEthereumAddress nextScreen={this.nextScreen.bind(this)} />
        )
      case 1:
        return (
          <PresetHabits nextScreen={this.nextScreen.bind(this)} />
        )
      case 2:
        return (
          <SupervisorEthereumAddress nextScreen={this.nextScreen.bind(this)} />
        )
      default:
        return (
          <Dashboard />
        )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 30,
    fontWeight: '400',
    textAlign: 'center'
  },
  textInput: {
    height: 40,
    width: `75%`,
    color: '#e93fff',
    marginTop: 30
  }
});
