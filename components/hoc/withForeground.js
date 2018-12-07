import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import Header from "../Header";
import SideMenu from "../SideMenu";
import Styles from "../../assets/Styles"


const withForeground = ( ScreenComponent ) => {
	return class Foreground extends Component {
    
    static navigationOptions = {
      headerTitle: <Header/>,
      headerStyle: {
        backgroundColor: Styles.colours.backgroundLight,
        height: Styles.layout.isIphoneX ? -10 : -5
      },
    }
    
		render() {

			return(
				<View style={styles.wrapper}>
					<SideMenu/>
          <ScrollView contentContainerStyle={styles.container}>
            <ScreenComponent
              {...this.props}
              foregroundFor={this.props.navigation.state.routeName}
            />
          </ScrollView>
				</View>
			)
		}
	}
}

const styles = StyleSheet.create({
  wrapper: {
    // paddingTop: 15,
    flex: 1,
    backgroundColor: Styles.colours.background,
    flexDirection: 'column',
    justifyContent: "space-between"
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default withForeground