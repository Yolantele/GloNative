import React from 'react';
import { TouchableOpacity, StyleSheet, Button } from 'react-native';

import Styles from "../../assets/Styles";

export default class CustomButon extends React.Component {

  render() {
    let container = [localStyles.container]
    
    let { title, onPress, colour, disabled } = this.props
    
    return(
      <TouchableOpacity
        style={container}
      >
        <Button 
          style={container}
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
    borderRadius: 25,
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  containerNaked: {
    height: 20,
    backgroundColor: "transparent"
  },
  disabled: {
    color: Styles.colours.greyTransparent
  },
  title: {
    fontWeight: "200",
    color: Styles.colours.white,
    fontSize: 2,
    textAlign: "center"
  },
  titleNaked: {
    color: Styles.colours.primary
  }
});