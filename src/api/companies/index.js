import { getData, postData } from '@axios';

export const listCompanyApi = async (params) => await getData('web/company/getListCompany', params);
export const countCompanyApi = (params) => getData('web/company/countCompany', params);
export const deleteCompanyApi = (params) => postData('web/company/deleteCompany', params);
export const detailCompanyApi = (params) => getData('web/company/getDetailCompany', params);
export const addCompanyApi = (params) => postData('web/company/addCompany', params);
export const updateCompanyApi = (params) => postData('web/company/updateCompany', params);
