import { getData, postData } from '@axios';

export const listServiceApi = (params) => getData('web/service/getListService', params);
export const countServiceApi = (params) => getData('web/service/countService', params);
export const deleteServiceApi = (params) => postData('web/service/deleteService', params);
export const detailServiceApi = (params) => getData('web/service/getDetailService', params);
export const addServiceApi = (params) => postData('/web/service/addService', params);
export const updateServiceApi = (params) => postData('/web/service/updateService', params);
