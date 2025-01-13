import { Dimensions, StyleSheet } from 'react-native'
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
import { globalStyles } from '../../styles/global.styles'
const { height } = Dimensions.get('window')

export const styles = StyleSheet.create({
	introRoot: {
		...globalStyles.pagesInitial,
	},
	introImage: {
		maxWidth: 1024,
		width: wp('100%'),
		height: hp('70%'),
		resizeMode: 'cover',
	},
	introContent: {
		alignItems: 'center',
		marginTop: height > 830 ? hp('-34%') : hp('-40%'),
	},
	logoImage: {
		width: 80,
		height: 80,
		marginBottom: 10,
	},
	introText: {
		color: 'rgb(255, 255, 255)',
		fontFamily: 'avenir-bold',
		fontSize: 28,
		textAlign: 'center',
	},
	signUpBtn: {
		borderRadius: 45,
		backgroundColor: 'rgb(30, 215, 96)',
		paddingVertical: 16,
		paddingHorizontal: 121,
		marginTop: 22,
	},
	btnPressed: {
		backgroundColor: 'rgb(25, 180, 80)',
	},
	socialBtnPressed: {
		backgroundColor: 'rgb(40, 43, 41)',
	},
	signUpBtnText: {
		color: 'black',
		fontFamily: 'avenir-bold',
	},
	socialBtn: {
		borderRadius: 45,
		borderWidth: 1,
		borderColor: 'white',
		paddingVertical: 16,
		maxWidth: 340,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		columnGap: 10,
	},
	socialBtnText: {
		color: 'white',
		fontFamily: 'avenir-bold',
	},
	logInBtnText: {
		color: 'white',
		fontFamily: 'avenir-bold',
	},
	btnsContainer: {
		display: 'flex',
		rowGap: 20,
	},
	logInBtn: {
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		paddingVertical: 20,
	},
})
