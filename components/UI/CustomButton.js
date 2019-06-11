import React from 'react'
import { TouchableOpacity, Button } from 'react-native'
import Styles from '../../assets/Styles'
import { Container } from '../Styled/StyledCustomButton'

const CustomButton = ({ title, onPress, colour, disabled, type }) => 
<Container type={type} name={`button-${title}-container`}>
  <TouchableOpacity>
    <Button
      name={title}
      title={title}
      onPress={onPress}
      color={disabled ? Styles.colours.greyTransparent : colour || Styles.colours.darkText}
    />
  </TouchableOpacity>
</Container>

export default CustomButton
