/* eslint-disable prettier/prettier */
import axios, { AxiosError, AxiosInstance } from 'axios';
import { toast } from 'react-toastify';

class HttpAuth {
	instance: AxiosInstance;
	constructor() {
		this.instance = axios.create({
			baseURL: 'https://register-and-login-with-jwt-token.p.rapidapi.com',
			timeout: 10000,
			headers: {
				'Content-Type': 'application/json',
				'X-RapidAPI-Host': 'register-and-login-with-jwt-token.p.rapidapi.com'
			}
		});

		// Add a response interceptor
		this.instance.interceptors.response.use(
			function (response) {
				// Any status code that lie within the range of 2xx cause this function to trigger
				// Do something with response data
				return response;
			},
			function (error: AxiosError) {
				// Any status codes that falls outside the range of 2xx cause this function to trigger
				// Do something with response error
				const message = error.message;
				toast.error(message);
				return Promise.reject(error);
			}
		);
	}
}

const httpAuth = new HttpAuth().instance;

export default httpAuth;
