import React from 'react'
import { Text, View } from 'react-native'
import EmailIcon from '../../../../assets/email-verification/emailIcon.svg'
import { styles } from './EmailVerification.styles'

const EmailVerification: React.FC = () => {
	return (
		<View style={styles.root}>
			<View style={styles.wrapper}>
				<EmailIcon width={30} height={30} />
				<Text style={styles.title}>Email Verification</Text>
				<Text style={styles.text}>
					We have sent a confirmation letter to your email. Please check your
					inbox to verify your registration
				</Text>
			</View>
		</View>
	)
}

export default EmailVerification
