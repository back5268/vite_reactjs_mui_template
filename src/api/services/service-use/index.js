import { getData, postData } from '@axios';

export const listServiceUseApi = (params) => getData('web/service_use/getListServiceUse', params);
export const countServiceUseApi = (params) => getData('web/service_use/countServiceUse', params);
export const deleteServiceUseApi = (params) => postData('web/service_use/deleteServiceUse', params);
export const detailServiceUseApi = (params) => getData('web/service_use/getDetailServiceUse', params);
export const addServiceUseApi = (params) => postData('/web/service_use/addServiceUse', params);
export const updateServiceUseApi = (params) => postData('/web/service_use/updateServiceUse', params);
