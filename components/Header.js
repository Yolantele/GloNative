import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Styles from '../assets/Styles'

export default class Header extends Component {
  render() {
    const { menu, headerTitle, container } = styles

    return (
      <View style={container}>
        <Text style={menu}>menu</Text>
        <Text style={headerTitle}>Glo.</Text>
        <Text style={menu}>inbox</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: Styles.layout.isIphoneX ? 90 : 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Styles.colours.backgroundLight,
    borderColor: Styles.colours.backgroundLight,
    paddingLeft: 30,
    paddingRight: 30,
    shadowColor: Styles.colours.black,
    shadowOffset: { y: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10
  },
  headerTitle: {
    fontWeight: 'bold',
    color: Styles.colours.darkText,
    fontSize: Styles.layout.isIphoneX ? 24 : 18
  },
  menu: {
    fontWeight: '300',
    color: Styles.colours.darkText,
    fontSize: 12
  }
})
