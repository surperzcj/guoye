/* eslint-disable func-call-spacing,prefer-promise-reject-errors */
import axios from 'axios'
import qs from 'qs'
const instance = axios.create({
    baseURL: 'http://124.70.190.160/api/',
    transformRequest: function (data) {
        data = qs.stringify(data);
        return data;
    },
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
})
// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});
export default class HttpUtil {
    static get(url, params = {}) {
        return new Promise((resolve, reject) => {
            instance.get(url, {
                params
            }).then(({
                data
            }) => {
                resolve(data)
            }).catch((err) => {
                reject({
                    err: JSON.stringify(err)
                })
            })
        })
    }
    static post(url, params = {}, config = {
        'Content-Type': 'application/json'
    }) {
        return new Promise((resolve, reject) => {
            instance.post(url, params, config).then(({
                data
            }) => {
                resolve(data)
            }).catch((err) => {
                reject({
                    err: JSON.stringify(err)
                })
            })
        })
    }
    static delete(url, params = {}, config = {
        'Content-Type': 'application/json'
    }) {
        return new Promise((resolve, reject) => {
            instance.delete(url, params, config).then(({
                data
            }) => {
                resolve(data)
            }).catch((err) => {
                reject({
                    err: JSON.stringify(err)
                })
            })
        })
    }
}