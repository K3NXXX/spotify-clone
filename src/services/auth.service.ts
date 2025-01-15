import axios from 'axios'
import { ISignUpData } from '../@types/auth.types'

class AuthService {
	private BASE_URL = 'https://spotify-server-api-28ab9bd01e44.herokuapp.com'

	async signup(signupData: ISignUpData) {
		const { data } = await axios.post(
			`${this.BASE_URL}/auth/signup`,
			signupData
		)
		return data
	}
}

export const authService = new AuthService()
