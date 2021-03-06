import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Story from './src/components/story/Story';
import Chat from './src/components/chat/Chat';
import Ranking from './src/components/ranking/Ranking';
import Result from './src/components/result/Result';


export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Result id={1} ranking={3}/>
        {/* <Ranking/> */}
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
