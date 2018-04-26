import React from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

export default class PresetHabits extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}> Choose a Habit </Text>

        <Button
          title="Quit Smoking"
          onPress={this.props.nextScreen}
        />

        <Button
          title="Hit the Gym"
          onPress={this.props.nextScreen}
        />

        <Button
          title="Read a Book"
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
