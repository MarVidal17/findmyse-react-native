import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Story from './src/components/story/Story';
import Chat from './src/components/chat/Chat';


export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Chat />
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});