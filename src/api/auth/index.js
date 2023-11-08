import { getData, postData } from '@axios';

export const getAuthApi = (params) => getData('/web/auth/get', params);
export const loginApi = (params) => postData('/web/auth/login', params);
