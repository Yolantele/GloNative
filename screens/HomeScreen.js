import React from 'react';
import { StyleSheet, Alert, Text, Button, Linking , View } from 'react-native';

import CustomButon from '../components/designedElements/CustomButton';
import Styles from '../assets/Styles';
import withForeground from '../components/hoc/withForeground';

import Analytics from '@aws-amplify/analytics';


class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
    this.handleAnalyticsClick = this.handleAnalyticsClick.bind(this);
    this.state = {resultHtml: <Text></Text>, eventsSent: 0};
  }

  _handleHelpPress = () => {
    Alert.alert('handleHelpPress')
  };

  handleAnalyticsClick() {
    Analytics.record('AWS Amplify Tutorial Event')
      .then( (evt) => {
          const url = 'https://console.aws.amazon.com/pinpoint/home/?region=us-east-1#/apps/'+awsconfig.aws_mobile_analytics_app_id+'/analytics/events';
          let result = (
            <View>
              <Text>Event Submitted.</Text>
              <Text>Events sent: {++this.state.eventsSent}</Text>
              <Text style={styles.link} onPress={() => Linking.openURL(url)}>
                View Events on the Amazon Pinpoint Console
              </Text>
            </View>
          );
          this.setState({
            'resultHtml': result
          });
    });
  };
  
  render() {
    return (
      <>
        <View >
          <Text>Welcome to your React Native App with Amplify!</Text>
          <Button title="Generate Analytics Event" onPress={this.handleAnalyticsClick} />
          {this.state.resultHtml}
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

export default withForeground(HomeScreen)