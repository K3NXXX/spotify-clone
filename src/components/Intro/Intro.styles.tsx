import { Dimensions, StyleSheet } from 'react-native'

const { width } = Dimensions.get('window')

export const styles = StyleSheet.create({

	introImage: {
		width: width,
		height: 550,
		resizeMode: 'cover'
	},
	introContent: {
		alignItems: "center",
		marginTop: -200

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
		textAlign: "center",
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
		color: "black",
		fontFamily: "avenir-bold"
	},
	socialBtn: {
		borderRadius: 45,
		borderWidth: 1,
		borderColor: "white",
		paddingVertical: 16,
		maxWidth: 340, 
		justifyContent: 'center', 
		alignItems: 'center',    
		flexDirection: "row",
		columnGap: 10,
	},
	socialBtnText: {
		color: "white",
		fontFamily: "avenir-bold"
	},
	logInBtnText: {
		color: "white",
		fontFamily: "avenir-bold"
	},
	btnsContainer: {
		display: "flex",
		rowGap: 20
	},
	logInBtn : {
		justifyContent: 'center', 
		alignItems: 'center',    
		flexDirection: "row",
		paddingVertical: 20

	}

})
