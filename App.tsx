import { NavigationContainer } from '@react-navigation/native'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { StatusBar } from 'expo-status-bar'
import { useCallback } from 'react'
import { StyleSheet, View } from 'react-native'
import Navigation from './src/navigation/Navigation'

SplashScreen.preventAutoHideAsync()
const queryClient = new QueryClient()



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
		<QueryClientProvider client={queryClient}>
			<NavigationContainer>
				<View style={styles.container} onLayout={handleOnLayout}>
					<Navigation />
					<StatusBar style='light' />
				</View>
			</NavigationContainer>
		</QueryClientProvider>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'rgb(18, 18, 18)',
	},
})
