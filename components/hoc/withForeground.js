import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import Header from "../Header";
import SideMenu from "../SideMenu";
import Styles from "../../assets/Styles"


const withForeground = (MyComponent) => {
	return class Foreground extends Component {
    
    static navigationOptions = {
      headerTitle: <Header/>,
      headerStyle: {
        backgroundColor: Styles.colours.backgroundLight,
        height: 10,
      },
    }
    
		render() {
			return(
				<View style={styles.wrapper}>
					<SideMenu/>
          <ScrollView contentContainerStyle={styles.container}>
            <MyComponent
              {...this.props.children}
              foreground={this.props.navigation.state.routeName ? this.props.navigation.state.routeName : null}
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