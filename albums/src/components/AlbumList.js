import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

/*
const AlbumList = () => {
  return (
    <View>
      <Text>Album List!!!</Text>
    </View>
  );
};
*/

/*

functional components

  static data
  can't do more complex logic
  easy and less code to write

class components

  dynamic source of data
  events, and complext logic
  more code to write

*/

class AlbumList extends Component {
  // class level proporty, init declare the state
  /*
  rules of state

    a plain javascript object used to record and respond to user-triggered event

    when component update what it need to show, call the.setState

    setState do not this.state = 'some value'

  */

  // props for parent to child data passing
  // state is update data from events that occurs in the app
  state = { albums: [] };

  // life cycle method
  componentWillMount() {
    // auto call when the compnent loads
    console.log('componentWillMount is called...');
    // debugger can be view remotely with
    // cmd + d

    // ajax called with a returned promise, change/update the set with setState
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
  }

  // react need key proprty when looping thro map
  // pass down the prop to album
  renderAlbums() {
   return this.state.albums.map(album => <AlbumDetail key={album.title} album={album} />);
 }

  // must have a render method
  render() {
    console.log(this.state);
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;
