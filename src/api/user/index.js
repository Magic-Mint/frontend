import axios from '../axiosApi';

const getUser = () => axios.get('/getMe');

const userApi = {
  getUser,
};

export default userApi;
