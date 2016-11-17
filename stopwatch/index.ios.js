import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

var Stopwatch = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>
          00:00.00
          </Text>
          <View>
          {this.startStopButton()}
          {this.lapButton()}
          </View>
        </View>
        <View>
          <Text>
            I am a list of laps
          </Text>
        </View>
      </View>
    )
  },
  startStopButton: function() {
    return (
      <View>
      <Text>
      Start
      </Text>
      </View>
    )
  },
  lapButton: function() {
    return (
      <View>
      <Text>
      Lap
      </Text>
      </View>
    )
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch'
  },
  header: {
    flex: 1
  },
  footer: {
    flex: 1
  }
})

AppRegistry.registerComponent('stopwatch', function() {
  return Stopwatch
});
