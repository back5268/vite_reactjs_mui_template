import { getData, postData } from '@axios';

export const listTemplateApi = (params) => getData('web/template/getListTemplate', params);
export const countTemplateApi = (params) => getData('web/template/countTemplate', params);
export const deleteTemplateApi = (params) => postData('web/template/deleteTemplate', params);
export const detailTemplateApi = (params) => getData('web/template/getDetailTemplate', params);
export const addTemplateApi = (params) => postData('/web/template/addTemplate', params, true);
export const updateTemplateApi = (params) => postData('/web/template/updateTemplate', params, true);
