import C from './constants'
import {combineReducers} from 'redux'
import initialState from  './initialState'


export default function (state = initialState, action) {
	switch (action.type) {

		case C.EMAIL_LOGIN:
		return {
			...state,
			
		}

		case types.LOGIN_USER_SUCCESS:
			return {
				...state,
				/*customerid: action.payload.customerToken.customer_id,
				usertoken: action.payload.customerToken.access_token,
				first_name: action.payload.customerUserData.first_name,
				last_name: action.payload.customerUserData.last_name,
				orders_count: action.payload.customerUserData.orders_count,
				logged_in: 'true'
        */
        logged_in: 'true';
			};
		case types.LOGIN_USER_ERROR:
			return {
				...state,
				error: action.payload.error,
				password: '',

			};
		case types.LOGOUT_USER_SUCCESS:
			return {
				...state,
        email: '';
        password: '';
        username: '';
        first_name : '';
        last_name: '';
        logged_in:''
			};

		default:
			return state;
	}
}
