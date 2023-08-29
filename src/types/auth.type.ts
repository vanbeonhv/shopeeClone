import { User } from './user.type';

export interface Auth {
	token?: string;
	userdetails: User;
}
