import { getData, postData } from "@axios"

export const listUserApi = (params) => getData('/web/user/getListUser', params)
export const countUserApi = (params) => getData('/web/user/countUser', params)
export const detailUserApi = (params) => getData('/web/user/getDetailUser', params)
export const deleteUserApi = (params) => postData('/web/user/deleteUser', params)
export const addUserApi = (params) => postData('/web/user/addUser', params)
export const updateUserApi = (params) => postData('/web/user/updateUser', params)
