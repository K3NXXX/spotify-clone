import React from 'react'
import { View } from 'react-native'
import ReturnArrowIcon from '../../../assets/global/returnArrow.svg'
import { styles } from './ReturnArrow.styles'

interface IReturnArrow {
	navigation: any
}
const ReturnArrow: React.FC<IReturnArrow> = ({ navigation }) => {
	return (
		<View style={styles.navigationRoot}>
			<View style={styles.returnArrowBg}>
				<ReturnArrowIcon
					onPress={() => navigation.goBack()}
					width={20}
					height={20}
				/>
			</View>
		</View>
	)
}

export default ReturnArrow
