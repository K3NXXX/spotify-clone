import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { StatusBar } from 'expo-status-bar'
import { useCallback } from 'react'
import { StyleSheet, View } from 'react-native'
import { SCREENS } from './src/constants/screens.contstants'
import IntroScreen from './src/screens/IntroScreen'
import SignUpScreen from './src/screens/SignUpScreen'

SplashScreen.preventAutoHideAsync()

const Stack = createStackNavigator()

export default function App() {
	const [isLoaded] = useFonts({
		'avenir-bold': require('./assets/fonts/AvenirNextCyr-Bold.ttf'),
		'avenir-regular': require('./assets/fonts/AvenirNextCyr-Regular.ttf'),
		'avenir-medium': require('./assets/fonts/AvenirNextCyr-Medium.ttf'),
	})

	const handleOnLayout = useCallback(async () => {
		if (isLoaded) {
			await SplashScreen.hideAsync()
		}
	}, [isLoaded])

	if (!isLoaded) {
		return null
	}
	return (
		<NavigationContainer>
			<View style={styles.container} onLayout={handleOnLayout}>
				<Stack.Navigator
					screenOptions={{ headerShown: false }}
					initialRouteName={SCREENS.INTRO}
				>
					<Stack.Screen name={SCREENS.INTRO} component={IntroScreen} />
					<Stack.Screen name={SCREENS.SIGNUP} component={SignUpScreen} />
				</Stack.Navigator>

				<StatusBar style='light' />
			</View>
		</NavigationContainer>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'rgb(18, 18, 18)',
	},
})
