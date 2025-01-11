import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { StatusBar } from 'expo-status-bar'
import { useCallback } from 'react'
import { StyleSheet, View } from 'react-native'
import IntroScreen from './src/screens/IntroScreen'

SplashScreen.preventAutoHideAsync()

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
		<View style={styles.container} onLayout={handleOnLayout}>
			<IntroScreen />
			<StatusBar style='light' />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'rgb(18, 18, 18)',
	},
})