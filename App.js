


import React from 'react';
import { Platform, StatusBar, StyleSheet, View} from 'react-native';
import AppNavigator from './navigation/AppNavigator';

import Auth from '@aws-amplify/auth';
import Analytics from '@aws-amplify/analytics';
import awsconfig from './aws-exports';
import aws_exports from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react-native';

import Amplify from 'aws-amplify';
import keys from './keys';

// retrieve temporary AWS credentials and sign requests
Auth.configure(awsconfig);
// send analytics events to Amazon Pinpoint
Analytics.configure(awsconfig);

Amplify.configure(aws_exports);
Amplify.configure({
  Auth: {
      // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
      identityPoolId: keys.identityPoolId,
      // REQUIRED - Amazon Cognito Region
      region: keys.poolARN,
      // REQUIRED - Cookie domain (only required if cookieStorage is provided)
          // domain: '.yourdomain.com',
      // OPTIONAL - Manually set the authentication flow type. Default is 'USER_SRP_AUTH'
      authenticationFlowType: 'USER_PASSWORD_AUTH'
  }
})




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
