// imports

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
var Moment = require('moment');

var DayItem = require('./src/day-item');


// data
// var days = ["Sunday", "Monday","Tuesday","Wednesday","Thursday", "Friday", "Saturday"];

// Create a react Component

var Weekdays = React.createClass({
  render: function() {
      return <View style={styles.container}>
        <Text>
          Days of the Week:
        </Text>
        {this.days()}
      </View>
  },
  days: function() {
    // return days.map((d)=>{
    //   //called each item in days
    //   return <DayItem day={d} />
    // })
    var dayItems = [];
    for (var i = 0; i < 7; i++) {
      var d = Moment().add(i,'days').format('dddd');
      dayItems.push(
        <DayItem day={d} daysUntil={i} />
      )
    }
    return dayItems
  }
});


// style
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

// Show the react component on the screen
AppRegistry.registerComponent('weekdays', function(){
  return Weekdays
});
