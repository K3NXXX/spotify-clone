import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import EmailVerification from '../components/auth/EmailVerification/EmailVerification'
import { SCREENS } from '../constants/screens.constants'
import IntroScreen from '../screens/IntroScreen'
import LoginScreen from '../screens/LoginScreen'
import SignUpScreen from '../screens/SignUpScreen'
import ReturnArrow from '../ui/ReturnArrow/ReturnArrow'

const Stack = createStackNavigator()



const Navigation: React.FC = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				header: ({ navigation }) => <ReturnArrow navigation={navigation} />,
			}}
			initialRouteName={SCREENS.INTRO}
		>
			<Stack.Screen
				options={{ headerShown: false }}
				name={SCREENS.INTRO}
				component={IntroScreen}
			/>
			<Stack.Screen name={SCREENS.SIGNUP} component={SignUpScreen} />
			<Stack.Screen name={SCREENS.LOGIN} component={LoginScreen} />
			<Stack.Screen
				name={SCREENS.EMAIL_VERIFICATION}
				component={EmailVerification}
			/>
		</Stack.Navigator>
	)
}

export default Navigation
