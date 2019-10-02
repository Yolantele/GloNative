import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import withForeground from '../components/hoc/withForeground'

class Profile extends React.Component {
  render() {
    return (
      <View>
        <Text>Profile screen</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({})

export default withForeground(Profile)
