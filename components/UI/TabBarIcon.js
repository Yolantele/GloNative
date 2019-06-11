import React from 'react'
import { Image } from 'react-native'
import { Container } from '../Styled/StyledTabBarIcon'

const TabBarIcon = ({imageHeight, image}) => 
  <Container height={imageHeight}>
    <Image 
      source={image} 
      resizeMode={'contain'}
      resizeMethod={'scale'}
      style={imageContainer}
      alt={`image-${alt}`}
    />
  </Container>
  

export default TabBarIcon