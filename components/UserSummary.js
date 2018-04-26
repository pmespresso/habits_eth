import React from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

export default class UserSummary extends React.Component {

  render() {
    return (
      <View>
        
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
