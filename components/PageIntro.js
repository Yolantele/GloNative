import React from 'react'
import { Text, View, StyleSheet, Alert, Animated } from 'react-native'
import Styles from '../assets/Styles'

export default class PageIntro extends React.Component {
  onChangeQuoute = () => {}

  onFontIncrease = () => {
    //  not working atm
    const fontIncrease = [mainText]
    fontIncrease.push({ fontSize: 30 })
    // Alert.alert('longpress')
  }

  render() {
    const { header, mainText } = this.props
    const { container, layout, header, mainText } = styles

    return (
      <View style={container}>
        <View style={layout}>
          <Text style={header}>{header}</Text>

          <Text
            style={mainTextStyle}
            onLongPress={this.onFontIncrease()}
            onPress={() => Alert.alert('1st')}>
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
    marginBottom: Styles.height * 0.05
  },
  layout: {
    flex: 1,
    alignItems: 'center',
    padding: `${Styles.height * 0.1}, ${Styles.width * 0.05}`,
    backgroundColor: Styles.colours.backgroundLight,
    height: Styles.height * 0.3
  },
  header: {
    fontSize: 20,
    fontWeight: '600',
    color: Styles.colours.secondary,
    paddingBottom: Styles.height * 0.01,
    textTransform: 'capitalize'
  },
  mainTextStyle: {
    fontSize: 15,
    fontWeight: '200',
    color: Styles.colours.darkText,
    lineHeight: 25,
    textAlign: 'center',
    letterSpacing: 2,
    textTransform: 'capitalize'
  }
})
