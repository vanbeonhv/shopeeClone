/* eslint-disable prettier/prettier */
import axios, { AxiosInstance } from 'axios';

class HttpAuth {
	instance: AxiosInstance;
	constructor() {
		this.instance = axios.create({
			baseURL: 'https://register-and-login-with-jwt-token.p.rapidapi.com',
			timeout: 10000,
			headers: {
				'Content-Type': 'application/json',
				// 'X-RapidAPI-Key': 'e8f8dd1794msh1bd9bd8c552383cp17e450jsn90faddc179f5',
				'X-RapidAPI-Host': 'register-and-login-with-jwt-token.p.rapidapi.com'
			}
		});
	}
}

const httpAuth = new HttpAuth().instance;

export default httpAuth;
