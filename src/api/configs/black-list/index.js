import { getData, postData } from '@axios';

export const listBlackListApi = (params) => getData('web/black_list/getListBlackList', params);
export const countBlackListApi = (params) => getData('web/black_list/countBlackList', params);
export const deleteBlackListApi = (params) => postData('web/black_list/deleteBlackList', params);
export const detailBlackListApi = (params) => getData('web/black_list/getDetailBlackList', params);
export const addBlackListApi = (params) => postData('/web/black_list/addBlackList', params);
export const updateBlackListApi = (params) => postData('/web/black_list/updateBlackList', params);
