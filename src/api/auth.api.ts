import { User } from '../types/user.type';
import httpAuth from '../utils/httpAuth';

export type RegisterUser = Omit<User, 'id'>;
export type LoginUser = {
	username: string;
	password: string;
};
export const registerAccount = (body: RegisterUser) =>
	httpAuth.post<User>('/register', body, {
		params: { 'rapidapi-key': 'e8f8dd1794msh1bd9bd8c552383cp17e450jsn90faddc179f5' }
	});

export const login = (body: LoginUser) =>
	httpAuth.post<User>('/user/login', body, {
		params: { 'rapidapi-key': 'e8f8dd1794msh1bd9bd8c552383cp17e450jsn90faddc179f5' }
	});
