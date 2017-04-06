// index.ios - place code in here for IOS!!

// import a library to help create a component
import React from 'react';

/* import ReactNative from 'react-native'; */
// import destructing, so import targeted parts from library
import { Text, AppRegistry, View} from 'react-native';
// component nesting
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';
/*

react

  know how a component should behave
  take bunch of componet make them work together

react native - portal to the mobile device

  know how to take output from a component and place it on the screen
  provide default core components

*/


// create a component JSX makes react easier to read
// a component is js func that return some content

/* older style
const App = () => {
  return (
    <Text>Some Text</Text>
  );
};
*/

// self closing tag, using imported component
// pass in the props of headerText as an object with the value 'Albums!'

// tag must be nested because only 1 tag can be returned, nest everything in view
const App = () => (
  <View style={{flex:1}}>
    <Header headerText={'Albumz!'}/>
    <AlbumList />
  </View>
);


// render it to the device
// register app to react native, and pass in "app-name", and pass in first component to app
AppRegistry.registerComponent('albums', () => App);

// react-native run-ios
// comand + r (reloads)
