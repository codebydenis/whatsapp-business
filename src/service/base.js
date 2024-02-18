import axios from 'axios';
import { getCookie } from './cookies';
import router from '@/router';

export const Provider = axios.create({
	baseURL: import.meta.env.VITE_BASE_URL,
});

Provider.interceptors.request.use(
	async (config) => {
		const token = getCookie('_token');
		if (!token) router.push('/login');
		config.headers = {
			Authorization: `Bearer ${token}`,
		};
		return config;
	},
	(error) => {
		Promise.reject(error);
	}
);
