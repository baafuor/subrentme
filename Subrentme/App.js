import React, { Component } from 'react';
import styles from './styles/Login';
import _ from 'lodash'
import { connect } from 'react-redux';
import {login} from './actions'

import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  AppRegistry,
  TextInput,
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback

} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
class App extends Component {

  constructor (props) {
    super(props);
    this.state = {
              route: 'Login',
              username: '',
              password: ''
          };
  }
componentWillMount () {

  this.setState({
    email: '',
    password: ''
  });

}

componentWillUnmount () {
  this.keyboardDidShowListener.remove();
  this.keyboardDidHideListener.remove();

}

userLogin(){
  this.props.onLogin(this.state.username, this.state.password)

}

/*_
DidHide() {
		 this.refs.scrollTo({ y: 0 });
	}

	_keyboardDidShow() {
		this.refs.scrollTo({ y: 70 });
	}
  */

  render() {
    return (


      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={{flex:1}}>
        <View style={[styles.inputWrapEmail, {top: 160}]}>
          <TextInput
            style={styles.input}
            placeholder = "Email"
            onChangeText={email => this.setState({ email })}
            value={this.props.email}
          />
        </View>

        <View style={[styles.inputWrapEmail, {top: 240}]}>
          <TextInput
            style={styles.input}
            placeholder = "Password"
            onChangeText={password => this.setState({ password })}
            value={this.props.password}
            onSubmitEditing={() => {
              this.userLogin();  //NOT WORKING
            }}

          />
        </View>

        <TouchableOpacity style={styles.forgotPasswordWrap} onPress={ () => {this._showForgotPassword()}}>
          <View>
            <Text style={styles.forgotPassword}>Forgot your Password</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.signInButtonWrap}>
          <Text style={styles.signInButton} onPress={(e) => this.userLogin(e)} >Sign In</Text>
        </View>
      </View>
      </TouchableWithoutFeedback>


    );
  }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isLoggedIn: state.auth.isLoggedIn
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (username, password) => { dispatch(login(username, password)); },
        /*onSignUp: (username, password) => { dispatch(signup(username, password)); }*/
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
