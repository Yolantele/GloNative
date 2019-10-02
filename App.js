import React from 'react';
import {
  Platform, StatusBar, StyleSheet, View,
} from 'react-native';
import AppNavigator from './navigation/AppNavigator';

// export default class App extends React.Component {
class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <AppNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
// uncomment the next line if want to add auth layer
// export default withAuthenticator(App, true);
