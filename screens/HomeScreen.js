import React from 'react';
import { StyleSheet, Alert, Text, Button, Linking , View } from 'react-native';

import CustomButon from '../components/designedElements/CustomButton';
import Styles from '../assets/Styles';
import withForeground from '../components/hoc/withForeground';

import { incrementCounter, decrementCounter }from '../actions';

// redux global state use
import { connect } from 'react-redux';


const mapDispatchToProps = dispatch => {
  return {
    incrementCounter: () => dispatch( incrementCounter() ),
    decrementCounter: () => dispatch ( decrementCounter() )
  }
}

const mapStateToProps = state => {
  return { ...state }
}

class HomeScreen extends React.Component {

  _handleHelpPress = () => {
    Alert.alert('handleHelpPress')
    this.props.incrementCounter()
  };

  render() {
    return (
      <>
        <View >
           <Text>{this.props.count}</Text>
        </View>

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
  link: {
    color: 'blue'
  }
});

export default connect(mapStateToProps, mapDispatchToProps )(withForeground(HomeScreen))