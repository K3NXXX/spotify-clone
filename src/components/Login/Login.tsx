import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { ILoginData } from '../../@types/auth.types'
import { styles } from './Login.styles'

const Login: React.FC = () => {
	const {
		control,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<ILoginData>({
		mode: 'onChange',
		defaultValues: {
			email: '',
			password: '',
		},
	})

	const onSubmit = (loginData: ILoginData) => {
		console.log('data', loginData)
	}
	return (
		<View style={styles.loginRoot}>
			<View style={styles.loginWrapper}>
				<Text style={styles.loginCreateText}>Log in to your account</Text>
				<View style={styles.loginForm}>
					<View style={styles.loginInputWrapper}>
						<Text style={styles.loginLabel}>What’s your email?</Text>
						<Controller
							control={control}
							rules={{
								required: 'Email is required',
								pattern: {
									value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
									message: 'Incorrect email format',
								},
								maxLength: {
									value: 100,
									message: 'Email must contain max 100 letters',
								},
							}}
							render={({ field: { onChange, onBlur, value } }) => (
								<TextInput
									selectionColor='rgb(30, 215, 96)'
									onBlur={onBlur}
									onChangeText={onChange}
									value={value}
									style={styles.loginInput}
								/>
							)}
							name='email'
						/>
						{errors.email && (
							<Text style={styles.errorText}>{errors.email.message}</Text>
						)}
					</View>

					<View style={styles.loginInputWrapper}>
						<Text style={styles.loginLabel}>Enter your password</Text>
						<Controller
							control={control}
							rules={{
								required: 'Password is required',
								minLength: {
									value: 8,
									message: 'Password must contain at least 8 letters',
								},
								pattern: {
									value: /\d/,
									message: 'Password must contain at least 1 number',
								},
							}}
							render={({ field: { onChange, onBlur, value } }) => (
								<TextInput
									selectionColor='rgb(30, 215, 96)'
									onBlur={onBlur}
									onChangeText={onChange}
									value={value}
									style={styles.loginInput}
									secureTextEntry
								/>
							)}
							name='password'
						/>
						{errors.password && (
							<Text style={styles.errorText}>{errors.password.message}</Text>
						)}
					</View>

					<TouchableOpacity
						style={styles.loginUpBtn}
						onPress={handleSubmit(onSubmit)}
					>
						<Text style={styles.loginUpBtnText}>Log in</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	)
}

export default Login
