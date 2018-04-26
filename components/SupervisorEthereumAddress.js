import React from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

export default class SupervisorEthereumAddress extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      text: '0xff23....',
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}> Enter Your Supervisor's Rinkeby Ethereum Address </Text>

        <TextInput
          style={styles.textInput}
          clearTextOnFocus={true}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />

        <Button
          title="Next"
          onPress={this.props.nextScreen}
        />
      </View>
    )
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
