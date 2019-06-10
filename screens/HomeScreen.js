import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import CustomButon from '../components/UI/CustomButton';
import Styles from '../assets/Styles';
import withForeground from '../components/hoc/withForeground';
import PageIntro from '../components/PageIntro';
import { incrementCounter, decrementCounter } from '../actions';
import text from '../assets/texts'

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
    this.props.incrementCounter()
  };

  render() {
    return (
      <ScrollView contentContainerStyle={Styles.layout.centered}>
        <PageIntro
          header={text.homepage.header}
          mainText={text.homepage.mainText}
        >
        </PageIntro>
        <View style={styles.container}>
          <Text>{this.props.count}</Text>
          <CustomButon
            title={'Increment'}
            onPress={() => this._handleHelpPress()}
            disabled={false}
            type={'round'}
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
    alignItems: "center",
  },
  link: {
    color: 'blue'
  }
});

export default connect(mapStateToProps, mapDispatchToProps )(withForeground(HomeScreen))