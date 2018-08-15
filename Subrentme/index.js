import { AppRegistry } from 'react-native';
import { Component } from 'react'
import React from 'react'
import App from './modules/auth/scenes/Login/Login';
import { Provider } from 'react-redux';
import store from './redux/store'
import Routes from './config/routes'

export default class Subrentme extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('Subrentme', () => Subrentme);
