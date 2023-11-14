import { getData, postData } from '@axios';

export const listCategoryTemplateApi = (params) => getData('web/category_template/getListCategoryTemplate', params);
export const countCategoryTemplateApi = (params) => getData('web/category_template/countCategoryTemplate', params);
export const deleteCategoryTemplateApi = (params) => postData('web/category_template/deleteCategoryTemplate', params);
export const detailCategoryTemplateApi = (params) => getData('web/category_template/getDetailCategoryTemplate', params);
export const addCategoryTemplateApi = (params) => postData('/web/category_template/addCategoryTemplate', params);
export const updateCategoryTemplateApi = (params) => postData('/web/category_template/updateCategoryTemplate', params);
