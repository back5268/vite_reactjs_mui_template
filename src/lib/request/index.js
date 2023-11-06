import fetchData from '@/react-query'
import { convertData, createFormData } from './request'

export const postData = (url, data, isUpload = false, blob = false, timeout = 600000) => {
    if (isUpload || blob) {
        const { files, ...params } = data
        data = createFormData(params, files)
    } else data = convertData(data)
    if (blob)
        return fetchData(url, {
            method: 'POST',
            timeout,
            body: data,
            responseType: 'blob',
            headers: { 'Content-Type': 'multipart/form-data' },
        })
    else if (isUpload)
        return fetchData(url, {
            method: 'POST',
            timeout,
            body: data,
            headers: { 'Content-Type': 'multipart/form-data' },
        })
    else return fetchData(url, {
        method: 'POST',
        timeout,
        body: JSON.stringify(data),
    })
}

export const getData = (url, params, blob = false, timeout = 600000) => {
    params = convertData(params)
    params = new URLSearchParams(params).toString();
    if (blob)
        return fetchData(url + '?' + params, {
            method: 'GET',
            timeout,
            responseType: 'blob',
            headers: { 'Content-Type': 'multipart/form-data' },
        })
    else return fetchData(url + '?' + params, {
        method: 'GET',
    })
}
