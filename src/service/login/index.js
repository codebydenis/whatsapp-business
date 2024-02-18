import Provider from '../base';

const loginUrl = 'user/login';

export const login = async (body) => {
	return await Provider(loginUrl, body);
};
