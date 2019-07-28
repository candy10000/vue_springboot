import axios from 'axios';

let base = 'tosp/employees';

export const requestLogin = params => { return axios.get(`tosp/users/login`,{ params: params }).then(res => res.data); };
//export const requestLogin = params => { return axios.post(`${base}/login`, params).then(res => res.data); };
export const getUserList = params => { return axios.get(`${base}/findall`, { params: params }); };

export const getUserListPage = params => { return axios.get(`${base}/findall`, { params: params }); };

export const removeUser = params => { return axios.delete(`${base}/remove`, { params: params }); };

export const batchRemoveUser = params => { return axios.delete(`${base}/batchremove`, { params: params }); };

export const editUser = params => { return axios.put(`${base}/edit`, params); };

export const addUser = params => { return axios.put(`${base}/add`, params); };