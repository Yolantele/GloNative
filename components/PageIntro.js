
import React from 'react';
import { Text, View, StyleSheet, Alert, Animated} from 'react-native';
import Styles from '../assets/Styles';

export default class PageIntro extends React.Component {

  onChangeQuoute = () => {
  }

  onFontIncrease = () => { //  not working atm
    const fontIncrease = [styles.mainText]
    fontIncrease.push({fontSize: 30})
    // Alert.alert('longpress')
  }
  
  render() {

    let { header, mainText } = this.props


    return (
      <View style={styles.container}>
        <View style={styles.layout}>
          <Text style={styles.header}>
            {header}
          </Text>

          <Text 
            style={styles.mainText}
            onLongPress={this.onFontIncrease()}
            onPress={() => Alert.alert('1st')}
          >
            {mainText}
          </Text>
        </View>
      </View>
    )

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginBottom: Styles.height * 0.05,
  },
  layout: {
    flex: 1,
    alignItems: 'center',
    paddingTop: Styles.height * 0.1,
    paddingBottom: Styles.height * 0.1,
    paddingLeft: Styles.width * 0.05,
    paddingRight: Styles.width * 0.05,
    backgroundColor: Styles.colours.backgroundLight,
    height: Styles.height * 0.3


  },
  header: {
    fontSize: 20,
    fontWeight: '600',
    color: Styles.colours.secondary,
    paddingBottom: Styles.height * 0.01,
    textTransform: 'capitalize',

  },
  mainText: {
    fontSize: 15,
    fontWeight: '200',
    color: Styles.colours.darkText,
    lineHeight: 25,
    textAlign: 'center',
    letterSpacing: 2, 
    textTransform: 'capitalize',
  }

});
