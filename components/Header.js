import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Styles from '../assets/Styles'

export default class Header extends Component {
	render() {
		return(
      <View style={styles.container}>
        <Text style={styles.menu}>menu</Text>
        <Text style={styles.headerTitleStyle}>Glo.</Text>
        <Text style={styles.menu}>inbox</Text>
      </View>
    )
	}
}

const styles = StyleSheet.create({
	container: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "baseline",
    backgroundColor: Styles.colours.backgroundLight,
    borderColor: Styles.colours.backgroundLight,
    paddingLeft:20,
    paddingRight:20,
    paddingBottom: 10,
  },
  headerTitleStyle: {
    fontWeight: 'bold',
    color: Styles.colours.darkText,
    fontSize: 18,
    paddingBottom: 20,
    marginBottom: 10,
  },
  menu: {
    fontWeight: '300',
    color: Styles.colours.darkText,
    fontSize: 12,
    paddingBottom: 20,
    marginBottom: 10,
  },
});