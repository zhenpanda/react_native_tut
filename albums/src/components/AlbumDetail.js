import React, { Component } from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

// destructing the input argument
const AlbumDetail = ({album}) => {
  // destructing again, into three new variable
  const { title, artist, thumbnail_image, image, url } = album;
  const { headerContentStyle, headerTextStyle, thumbnailStyle, thumbnailContainerStyle, imageStyle } = styles;

  return (
    <Card>

      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image style={thumbnailStyle} source={{ uri: thumbnail_image}} />
        </View>
        <View style={headerContentStyle}>
           <Text style={headerTextStyle}>{title}</Text>
           <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image style={imageStyle} source={{uri: image}} />
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(url) } />
      </CardSection>

    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  imageStyle: {
    height: 300,
    width: 300
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  }
};


export default AlbumDetail;
