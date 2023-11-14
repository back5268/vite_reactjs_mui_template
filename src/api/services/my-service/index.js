import { getData, postData } from '@axios';

export const listMyServiceApi = (params) => getData('web/my_service/getListMyService', params);
export const countMyServiceApi = (params) => getData('web/my_service/countMyService', params);
export const deleteMyServiceApi = (params) => postData('web/my_service/deleteMyService', params);
export const detailMyServiceApi = (params) => getData('web/my_service/getDetailMyService', params);
export const addMyServiceApi = (params) => postData('/web/my_service/addMyService', params);
export const updateMyServiceApi = (params) => postData('/web/my_service/updateMyService', params);
