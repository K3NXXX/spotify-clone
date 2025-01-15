import { Dimensions, StyleSheet } from 'react-native'
import { globalStyles } from '../../../styles/global.styles'
const { height } = Dimensions.get('window')
export const styles = StyleSheet.create({
	signRoot: {
		flex: 1,
		backgroundColor: 'rgb(18, 18, 18)',
	},
	signWrapper: {
		paddingTop: 80,
		alignItems: 'center',
		paddingHorizontal: 20,
		...globalStyles.pagesInitial,
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
	signForm: {
		width: '100%',
		maxWidth: 360,
	},

	signInputWrapper: {
		marginBottom: height > 745 ? 30 : 18,
	},
	signInput: {
		backgroundColor: 'rgb(119, 119, 119)',
		borderRadius: 5,
		paddingVertical: 16,
		paddingHorizontal: 20,
		color: 'white',
		width: '100%',
		maxWidth: 500,
		fontFamily: 'avenir-medium',
		letterSpacing: 1,
		fontSize: 16,
	},
	signUpBtn: {
		borderRadius: 45,
		backgroundColor: 'rgb(30, 215, 96)',
		paddingVertical: 16,
		marginTop: 22,
		alignItems: 'center',
	},
	errorText: {
		color: 'red',
		fontSize: 14,
		paddingTop: 3,
	},
	btnPressed: {
		backgroundColor: 'rgb(25, 180, 80)',
	},
	signUpBtnText: {
		color: 'black',
		fontFamily: 'avenir-bold',
	},
})
