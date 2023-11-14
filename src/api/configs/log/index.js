import { getData, postData } from '@axios';

export const listLogApi = (params) => getData('web/log/getListLog', params);
export const countLogApi = (params) => getData('web/log/countLog', params);
export const deleteLogApi = (params) => postData('web/log/deleteLog', params);
export const detailLogApi = (params) => getData('web/log/getDetailLog', params);
export const addLogApi = (params) => postData('/web/log/addLog', params);
export const updateLogApi = (params) => postData('/web/log/updateLog', params);
