import { getData, postData } from '@axios';

export const listServiceDetailApi = (params) => getData('web/service_detail/getListServiceDetail', params);
export const countServiceDetailApi = (params) => getData('web/service_detail/countServiceDetail', params);
export const deleteServiceDetailApi = (params) => postData('web/service_detail/deleteServiceDetail', params);
export const detailServiceDetailApi = (params) => getData('web/service_detail/getDetailServiceDetail', params);
export const addServiceDetailApi = (params) => postData('/web/service_detail/addServiceDetail', params);
export const updateServiceDetailApi = (params) => postData('/web/service_detail/updateServiceDetail', params);
