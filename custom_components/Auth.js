import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, Card, CardSection } from './common';
import LoginForm from './LoginForm';



class Auth extends Component {
  state = { loggedIn: null };
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyA1uGiako8Z1-Au72uR0Z2TcuOMVp1K4Us",
      authDomain: "authentication-8a183.firebaseapp.com",
      databaseURL: "https://authentication-8a183.firebaseio.com",
      projectId: "authentication-8a183",
      storageBucket: "authentication-8a183.appspot.com",
      messagingSenderId: "568714806078"
    });

    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
          </Button>
          </CardSection>
        );
        break;
      case false:
          return <LoginForm />;
        break;
      default:
        return <Spinner size='large' />;
    }
  }
  render () {
    return (
      <View>
        <Header headerText="Authentication"/>
        { this.renderContent() }
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    alignItems: 'center'
  }
}

export default Auth;
