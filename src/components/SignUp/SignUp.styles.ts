import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	signRoot: {
		paddingTop: 50,
		alignItems: 'center',
	},
	signCreateText: {
		color: 'white',
		fontSize: 18,
		fontFamily: 'avenir-bold',
		marginBottom: 30,
	},
	signLabel: {
		color: 'white',
		fontSize: 20,
		fontFamily: 'avenir-bold',
		marginBottom: 5,
	},
	signInputWrapper: {
		marginBottom: 30
	},
	signInput: {
		backgroundColor: 'rgb(119, 119, 119)',
		borderRadius: 5,
		paddingVertical: 16,
		paddingHorizontal: 20,
		width: 365,
		color: 'white',
		fontFamily: 'avenir-medium',
		letterSpacing: 1,
		fontSize: 16
	},
	signUpBtn: {
		borderRadius: 45,
		backgroundColor: 'rgb(30, 215, 96)',
		paddingVertical: 16,
		paddingHorizontal: 130,
		marginTop: 22,
	},
	btnPressed: {
		backgroundColor: 'rgb(25, 180, 80)',
	},
	signUpBtnText: {
		color: 'black',
		fontFamily: 'avenir-bold',
	}
	
})