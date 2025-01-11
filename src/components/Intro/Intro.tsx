import React from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import GoogleIcon from '../../../assets/intro/googleIcon.svg'
import FacebookIcon from '../../../assets/intro/facebookIcon.svg'
import AppleIcon from '../../../assets/intro/appleIcon.svg'
import introBg from '../../../assets/intro/intro-bg.png'
import Logo from '../../../assets/intro/logo.svg'
import { styles } from './Intro.styles'

const Intro: React.FC = () => {
	return (
		<View>
			<Image source={introBg} style={styles.introImage} />
			<View style={styles.introContent}>
				<Logo style={styles.logoImage} />
				<Text style={styles.introText}>Millions of Songs.</Text>
				<Text style={styles.introText}>Free on Spotify.</Text>
				<View style={styles.btnsContainer}>
					<Pressable
						style={({ pressed }) => [
							styles.signUpBtn,
							pressed && styles.btnPressed,
						]}
					>
						<Text style={styles.signUpBtnText}>Sign up free</Text>
					</Pressable>
					<Pressable
						style={({ pressed }) => [
							styles.socialBtn,
							pressed && styles.socialBtnPressed,
						]}
					>
						<GoogleIcon />
						<Text style={styles.socialBtnText}>Continue with Google</Text>
					</Pressable>
					<Pressable
						style={({ pressed }) => [
							styles.socialBtn,
							pressed && styles.socialBtnPressed,
						]}
					>
						<FacebookIcon />
						<Text style={styles.socialBtnText}>Continue with Facebook</Text>
					</Pressable>
					<Pressable
						style={({ pressed }) => [
							styles.socialBtn,
							pressed && styles.socialBtnPressed,
						]}
					>
						<AppleIcon />
						<Text style={styles.socialBtnText}>Continue with Facebook</Text>
					</Pressable>
					<Pressable
						style={styles.logInBtn}
					>
						<Text style={styles.logInBtnText}>Log in</Text>
					</Pressable>
				</View>
			</View>
		</View>
	)
}

export default Intro