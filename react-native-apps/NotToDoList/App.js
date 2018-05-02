import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Header from './components/Header';
import Body from './components/Body';

export default class App extends Component{
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>Ini Header</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.listItem}>
            <View style={styles.listItemLeft}>
              <Text> v </Text>
            </View>
            <View style={styles.listItemRight}>
              <Text> Test 1</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  header: {
    flex: 0.5,
    backgroundColor: 'yellow',
    marginTop: 20,
  },
  body: {
    flex: 5,
  },
  listItemLeft: {
    flex: 1,
  },
  listItemRight: {
    flex: 9,
  }
})
