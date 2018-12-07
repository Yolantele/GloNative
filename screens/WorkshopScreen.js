import React from 'react';
import { StyleSheet, Text} from 'react-native';
import Styles from '../assets/Styles';
import withForeground from '../components/hoc/withForeground';

 class WorkshopScreen extends React.Component {

  render() {
    return (
      <Text>'Workshop Screen'</Text>
    );
  }
}

const styles = StyleSheet.create({
});

export default withForeground(WorkshopScreen)