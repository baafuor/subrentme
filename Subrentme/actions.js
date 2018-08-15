import {AsyncStorage} from 'react-native';
import C from './constants';

export function emailChanged(text) {
  return {
    type: C.EMAIL_CHANGED,
    payload:text
  };
}

export function passwordChanged(password) {
  return {
    type: C.PASSWORD_CHANGED,
    payload: password
  };
}

export function login({username, password}) {
  return function (dispatch){
    return dispatch => {

      const firebaseService = require("firebase");
      var config = {
        apiKey: "AIzaSyCGZW6XqYrsrZ5EmQ_c3yARDs0vPiFL4bk",
        authDomain: "subrentme-82312.firebaseapp.com",
        databaseURL: "https://subrentme-82312.firebaseio.com",
        storageBucket: "subrentme-82312.appspot.com",
        messagingSenderId: "503043834454",
      };
      firebaseService.initializeApp(config);

        firebaseService.auth()
          .signInWithEmailAndPassword(email, password)
          .then((response) => Alert.alert('Logged In Successfully!!'))
          .catch(error => this.setState({ errorMessage: error.message }))
    //firebase authentication ends here
    };
  }
  

};

export function loginUserSuccess(){
  //we will think of what do here in the future
}

export function loginUserError(error) {
  return {
    type: C.LOGIN_USER_ERROR,
    payload:error
  }
}

export function logoutUser() {
  firebaseService.auth().signOut();  //pass in the logout error
}
