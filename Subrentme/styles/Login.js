import { StyleSheet,Dimensions } from 'react-native';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		opacity: 0,
		flex: 1
	},
	accountBg: {
		position: 'absolute',
		width: SCREEN_WIDTH,
		height: SCREEN_HEIGHT,
		zIndex: 1
	},
	accountHeader: {
		position: 'absolute',
		fontSize: 22,
		top: 40,
		left: 0,
		textAlign: 'center',
		width: SCREEN_WIDTH,
		fontFamily: 'ProximaNova-Regular',
		color:'#333'
	},
	inputWrapEmail: {
		height: 50,
		position: 'absolute',
		borderRadius: 3,
		zIndex: 2,
		width: 300,
		top: 240,
		left: (SCREEN_WIDTH / 2) - 150,
		borderColor: '#FAFAFA',
		borderWidth: 0.5,
		backgroundColor: '#FAFAFA'
		},
	input: {
		height: 50,
		position: 'absolute',
		color: '#000',
		zIndex: 2,
		width: 300,
		top: 0,
		left: 0,
		fontSize: 15,
		fontFamily: 'ProximaNova-Light',
		paddingLeft: 16
	},
	invalidEmail: {
		color: '#333',
		position: 'absolute',
		top: 155,
		textAlign: 'center',
		left: (SCREEN_WIDTH / 2) - 145,
		fontSize: 14,
		fontFamily: 'ProximaNova-Light'
	},
	accountSwitchWrap: {
		position: 'absolute',
		bottom: 0,
		width: SCREEN_WIDTH,
		height: 50
	},
	accountSwitchWrapText: {
		color: '#aaa',
		fontSize: 13,
		textAlign: 'center',
	},
	accountSwitchWrapButtton: {
		zIndex: 4,
		position: 'absolute',
		width: SCREEN_WIDTH,
	},
	signUpText: {
		textAlign: 'center',
		fontSize: 15,
		fontFamily: 'ProximaNova-Light',
		lineHeight: 50
	},
	signUpButton: {
		textAlign: 'center',
		fontSize: 15,
		fontFamily: 'ProximaNova-Regular',
		lineHeight: 50
	},
	signInButtonWrap: {
		position: 'absolute',
		top: 370,
		width: 180,
		backgroundColor: '#3B5998',
		zIndex: 3,
		height: 40,
		left: (SCREEN_WIDTH / 2) - 90,
		opacity: 0.9,
		borderRadius: 3
	},
	signInButton: {
		position: 'absolute',
		fontSize: 18,
		width: 180,
		textAlign: 'center',
		color: '#FFFFFF',
		top: 10,
		fontFamily: 'Neue-Helvetica'
	},
	accountSignupContainer: {
		backgroundColor: 'white',
		position: 'absolute',
		height: SCREEN_HEIGHT,
		width: SCREEN_WIDTH

	},
	forgotPasswordWrap: {
		position: 'absolute',
		top: 310,
		zIndex: 100,
		width: 200,
		left: (SCREEN_WIDTH / 2) - 100,
		height: 40
	},
	forgotPassword: {
		fontSize: 15,
		textAlign: 'center',
		fontFamily: 'ProximaNova-Light',
		lineHeight: 40,
    color: '#3B5998'
	},
	accountActionsContainer: {
		flex: 1,
		width: SCREEN_WIDTH
	},
	accountTopBar: {
		height: 100,
		justifyContent: 'space-around',
		paddingTop: 40,
		paddingLeft: 20,
		paddingRight: 20
	},
	accountGreeting: {
		fontSize: 34,
		color: '#333',
		fontFamily: 'ProximaNova-Regular',
	},
	accountSubGreeting: {
		fontSize: 18,
		color: '#333',
		fontFamily: 'ProximaNova-Light',
		marginTop: 15
	},
	accountActionContainer: {
		flex: 1,
		height: SCREEN_HEIGHT - 150,
	},
	accountActionWrap: {
		height: SCREEN_HEIGHT - 155,
		flex: 1,
		flexDirection: 'row',
		alignSelf: 'center'
	},
	accountActionItemWrap: {
		height: (SCREEN_HEIGHT - 155) / 2,
		width: SCREEN_WIDTH / 2,
		justifyContent: 'flex-end'
	},
	accountActionItemTitle: {
		textAlign: 'center',
		top: 10,
		fontFamily: 'ProximaNova-Light'
	}


});

export default styles;
