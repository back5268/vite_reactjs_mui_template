import { getData, postData } from '@axios';

export const listProjectApi = (params) => getData('web/project/getListProject', params);
export const countProjectApi = (params) => getData('web/project/countProject', params);
export const deleteProjectApi = (params) => postData('web/project/deleteProject', params);
export const detailProjectApi = (params) => getData('web/project/getDetailProject', params);
export const addProjectApi = (params) => postData('/web/project/addProject', params);
export const updateProjectApi = (params) => postData('/web/project/updateProject', params);
