import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';



class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading: false };

  onButtonPressed() {
    console.log(this.state);
    debugger;
    const { email, password } = this.state;
    this.setState({error: '', loading: true});

    firebase.auth().signInWithEmailAndPassword( email, password )
    .then(this.onLoginSuccess.bind(this))
    .catch(this.onLoginFail.bind(this));
  }


  renderButton() {
    if(this.state.loading) {
      return (
          <Spinner size='small'/>
      );
    } else {
      return (
        <Button onPress={this.onButtonPressed.bind(this)}>
          Log In
        </Button>
      );
    }
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      error: 'Login Success',
      loading: false
    });
  }

  onLoginFail() {
    this.setState({
      error: 'Authentication Failed.',
      loading: false
    });
  }

  render() {
    return (
      <Card>
      <CardSection>
        <Input
          label='Email'
          placeholder='user@gmail.com'
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
        />
      </CardSection>
      <CardSection>
        <Input
          secureTextEntry
          label='Password'
          placeholder='password'
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
        />
      </CardSection>
      <Text style={styles.errorTextStyle}>
        {this.state.error}
      </Text>
      <CardSection>
          {this.renderButton()}
      </CardSection>
      </Card>
    );
  }
};

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default LoginForm;
