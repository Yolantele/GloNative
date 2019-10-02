import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { CustomButon, PageIntro } from '../components'
import Styles from '../assets/Styles'
import withForeground from '../components/hoc/withForeground'
import text from '../assets/texts'

class Home extends React.Component {
  _handleHelpPress = () => {
    console.log('handlePress')
  }

  render() {
    const { header, mainText } = text.homepage
    const { count } = this.props
    return (
      <ScrollView contentContainerStyle={Styles.layout.centered}>
        <PageIntro header={header} mainText={mainText} />
        <View style={styles.container}>
          <Text>{count}</Text>
          <CustomButon
            title="Increment"
            onPress={() => this._handleHelpPress()}
            disabled={false}
            type="round"
          />
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  link: {
    color: 'blue'
  }
})

export default withForeground(Home)
