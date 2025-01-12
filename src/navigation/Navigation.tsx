import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

import React from 'react'
import IntroScreen from '../screens/IntroScreen'
import SignUpScreen from '../screens/SignUpScreen'

const Navigation: React.FC = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name='Intro' component={IntroScreen} />
				<Stack.Screen name='SignUp' component={SignUpScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default Navigation
