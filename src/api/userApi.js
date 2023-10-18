import axiosClient from './axiosClient';

const userApi = {
  get(params) {
    const url = '/users/search';
    return axiosClient.get(url, { params });
  },
};

export default userApi;
