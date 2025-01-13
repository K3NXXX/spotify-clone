import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { ISignUpData } from '../../@types/auth.types'
import { styles } from './SignUp.styles'

const SignUp: React.FC = () => {
	const {
		control,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<ISignUpData>({
		mode: 'onChange',
		defaultValues: {
			name: '',
			email: '',
			password: '',
			confirmPassword: '',
		},
	})

	const password = watch('password')

	const onSubmit = (registerData: ISignUpData) => {
		console.log('data', registerData)
	}

	return (
		<View style={styles.signRoot}>
			<View style={styles.signWrapper}>
				<Text style={styles.signCreateText}>Create account</Text>
				<View style={styles.signForm}>
					<View style={styles.signInputWrapper}>
						<Text style={styles.signLabel}>Enter your name</Text>
						<Controller
							control={control}
							rules={{
								required: 'Name is required',
								minLength: {
									value: 3,
									message: 'Name must contain at least 3 letters',
								},
								maxLength: {
									value: 50,
									message: 'Name must contain max 50 letters',
								},
								pattern: {
									value: /^[a-zA-Zа-яА-Я0-9]+$/,
									message: 'Name cannot contain special characters',
								},
							}}
							render={({ field: { onChange, onBlur, value } }) => (
								<TextInput
								selectionColor="rgb(30, 215, 96)"
									onBlur={onBlur}
									onChangeText={onChange}
									value={value}
									style={styles.signInput}
								/>
							)}
							name='name'
						/>
						{errors.name && (
							<Text style={styles.errorText}>{errors.name.message}</Text>
						)}
					</View>

					<View style={styles.signInputWrapper}>
						<Text style={styles.signLabel}>What’s your email?</Text>
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
									selectionColor="rgb(30, 215, 96)"
									onBlur={onBlur}
									onChangeText={onChange}
									value={value}
									style={styles.signInput}
								/>
							)}
							name='email'
						/>
						{errors.email && (
							<Text style={styles.errorText}>{errors.email.message}</Text>
						)}
					</View>

					<View style={styles.signInputWrapper}>
						<Text style={styles.signLabel}>Enter your password</Text>
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
									selectionColor="rgb(30, 215, 96)"
									onBlur={onBlur}
									onChangeText={onChange}
									value={value}
									style={styles.signInput}
									secureTextEntry
								/>
							)}
							name='password'
						/>
						{errors.password && (
							<Text style={styles.errorText}>{errors.password.message}</Text>
						)}
					</View>

					<View style={styles.signInputWrapper}>
						<Text style={styles.signLabel}>Confirm your password</Text>
						<Controller
							control={control}
							rules={{
								required: 'Confirm password is required',
								validate: value =>
									value === password || 'Passwords do not match',
							}}
							render={({ field: { onChange, onBlur, value } }) => (
								<TextInput
									selectionColor="rgb(30, 215, 96)"
									onBlur={onBlur}
									onChangeText={onChange}
									value={value}
									style={styles.signInput}
									secureTextEntry
								/>
							)}
							name='confirmPassword'
						/>
						{errors.confirmPassword && (
							<Text style={styles.errorText}>
								{errors.confirmPassword.message}
							</Text>
						)}
					</View>
					<TouchableOpacity
						style={styles.signUpBtn}
						onPress={handleSubmit(onSubmit)}
					>
						<Text style={styles.signUpBtnText}>Submit</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	)
}

export default SignUp
