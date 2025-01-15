import { Dimensions, StyleSheet } from 'react-native'
import { globalStyles } from '../../../styles/global.styles'
export const styles = StyleSheet.create({
	root: {
		flex: 1,
		backgroundColor: 'rgb(18, 18, 18)',
	},
	wrapper: {
		paddingTop: 170,
		alignItems: 'center',
		paddingHorizontal: 20,
		...globalStyles.pagesInitial,
	},
	title: {
		color: 'white',
		fontSize: 18,
		fontFamily: 'avenir-bold',
		marginBottom: 30,
		marginTop: 5
	},
	text: {
		color: 'white',
		fontSize: 18,
		fontFamily: 'avenir-medium',
		marginBottom: 30,
		maxWidth: 600,
		width: "100%",
		textAlign: "center"
	}

})
	