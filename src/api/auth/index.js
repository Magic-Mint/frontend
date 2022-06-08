import axios from '../axiosApi';

const loginTwitter = () => axios.get('/auth/twitter');

const logout = () => axios.post('/auth/logout');

const authApi = {
  loginTwitter,
  logout,
};

export default authApi;
