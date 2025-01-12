import React from 'react'
import { useForm } from 'react-hook-form'
import { Pressable, Text, TextInput, View } from 'react-native'
import { ISignUpData } from '../../@types/auth.types'
import { styles } from './SignUp.styles'

const SignUp: React.FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ISignUpData>({ reValidateMode: 'onSubmit' })

	const onSubmit = (registerData: ISignUpData) => {
		console.log('data', registerData)
	}

	return (
		<View style={styles.signRoot}>
			<Text style={styles.signCreateText}>Create account</Text>
			<View>
				<View style={styles.signInputWrapper}>
					<Text style={styles.signLabel}>Enter your name</Text>
					<TextInput style={styles.signInput} />
				</View>
				<View style={styles.signInputWrapper}>
					<Text style={styles.signLabel}>What’s your email?</Text>
					<TextInput style={styles.signInput} />
				</View>
				<View style={styles.signInputWrapper}>
					<Text style={styles.signLabel}>Enter your password</Text>
					<TextInput style={styles.signInput} />
				</View>
				<View style={styles.signInputWrapper}>
					<Text style={styles.signLabel}>Confirm your password</Text>
					<TextInput style={styles.signInput} />
				</View>
				<Pressable
					style={({ pressed }) => [
						styles.signUpBtn,
						pressed && styles.btnPressed,
					]}
				>
					<Text style={styles.signUpBtnText}>Create account</Text>
				</Pressable>
			</View>
		</View>
	)
}

export default SignUp
