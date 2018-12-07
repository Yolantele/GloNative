import React from 'react';
import { Text, StyleSheet } from 'react-native';
import withForeground from '../components/hoc/withForeground';

 class ProfileScreen extends React.Component {

  
  render() {
    return (
      <>
        <Text>'Profile screen'</Text>
      </>
    );
  }
}

const styles = StyleSheet.create({
});

export default withForeground(ProfileScreen)