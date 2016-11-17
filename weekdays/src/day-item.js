// import code
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

// create Component
// passing in '.day' and '.daysUntil' as props
var DayItem = React.createClass({
  render: function() {
    return <Text style={this.style()}>
    {this.props.day}
    </Text>
  },
  style: function(){
    return {
      color: this.color(),
      fontWeight: this.fontWeight(),
      fontSize: this.fontSize(),
      lineHeight: this.lineHeight()
    }
  },
  color: function(){
    var opacity = 1/this.props.daysUntil;
    return String('rgba(0,0,0,'+ opacity +')');
  },
  fontWeight: function(){
    var weight = 7 - this.props.daysUntil;
    return String(weight * 100);
  },
  fontSize: function(){
    return 60 - 6 * this.props.daysUntil;
  },
  lineHeight: function(){
    return parseInt(70 - 4 * this.props.daysUntil);
  }
});

// style Component
// var styles = StyleSheet.create({
//   day: {
//     fontSize: 18,
//     color: 'blue'
//   }
// });

// make available else where
module.exports = DayItem;
