import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import SliderCard from '../cards/SliderCard';
import YesNoCard from '../cards/YesNoCard';
import StoryHeader from './StoryHeader';
import StoryFooter from './StoryFooter';


export default class Story extends React.Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#f00'}}>
        <StoryHeader />
        <View style={styles.container}>
          <YesNoCard question="Is this a question?" leftText="YES" rightText="NO" chosenOption={null} onPress={null} />
          <SliderCard question="Is this a question?" />
        </View>
        <StoryFooter />
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
