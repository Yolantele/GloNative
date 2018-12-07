import React from 'react';
import { StyleSheet,Alert } from 'react-native';

import CustomButon from '../components/designedElements/CustomButton';
import Styles from '../assets/Styles';
import withForeground from '../components/hoc/withForeground';

class HomeScreen extends React.Component {

  _handleHelpPress = () => {
    Alert.alert('handleHelpPress')
  };
  
  render() {
    return (
      <>
        <CustomButon
          title={'Help Press'}
          onPress={() => this._handleHelpPress()}
          disabled={false}
          type={'round'}
        />
      </>
    )
  }
}

const styles = StyleSheet.create({
});

export default withForeground(HomeScreen)