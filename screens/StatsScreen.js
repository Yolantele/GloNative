import React from 'react';
import { StyleSheet, Text, } from 'react-native';
import Styles from '../assets/Styles';
import withForeground from '../components/hoc/withForeground';

class StatsScreen extends React.Component {

  render() {
    return (
      <>
        <Text>'Stats Screen'</Text>
      </>
    );
  }
}

const styles = StyleSheet.create({
});

export default withForeground(StatsScreen)