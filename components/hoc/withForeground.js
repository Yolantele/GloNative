import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import Styles from '../../assets/Styles'
import Header from "../Header";
import SideMenu from "../SideMenu";

const withForeground = (MyComponent) => {
	return class Foreground extends Component {
    
    static navigationOptions = {
      header: null
    }
		// constructor () {
		// 	this.state = {
		// 	}
    // }
    
		render() {
			return(
				<View style={styles.wrapper}>
					<Header/>
					<SideMenu/>
          <ScrollView contentContainerStyle={styles.container}>
            <MyComponent
              {...this.props}
            />
          </ScrollView>
				</View>
			)
		}
	}
}

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 15,
    flex: 1,
    backgroundColor: Styles.colours.background
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default withForeground