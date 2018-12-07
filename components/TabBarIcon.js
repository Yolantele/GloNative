import React from 'react';
import { Image, StyleSheet, View} from 'react-native';

export default class TabBarIcon extends React.Component {
  render() {

    let { imageHeight, image, name } = this.props
    let imageContainer = [styles.imageContainer]

    if (imageHeight){
      imageContainer.push( {height: imageHeight} ) 
    }

    return (
      <View style={styles.container}>
        <Image 
        source={image} 
        resizeMode={"contain"}
        resizeMethod={"scale"}
        style={imageContainer}
        alt={name + ' alt'}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: '10%'
  },
  imageContainer: {
    margin: '15%',
    height: '20%',
    padding: '10%'
  }
})