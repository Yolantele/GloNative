import React from 'react';
import { TouchableOpacity, StyleSheet, Button } from 'react-native';
import Styles from "../../assets/Styles";

export default class CustomButon extends React.Component {

  render() {
    let container = [localStyles.container]
    let { title, onPress, colour, disabled, type} = this.props
    
    return(
      <TouchableOpacity
        style={container}
      >
        <Button 
          style={type && type === 'round' ? container.push({borderRadius: Styles.shape.roundCorner}) : container}
          title={title}
          onPress={onPress}
          color={disabled ? localStyles.disabled : colour || Styles.colours.darkText}
        />
      </TouchableOpacity>
    )
  }
}

const localStyles = StyleSheet.create({
  container: {
    backgroundColor: Styles.colours.white,
    height: 45,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: Styles.colours.black,
    shadowOffset: { y: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  disabled: {
    color: Styles.colours.greyTransparent
  },
});