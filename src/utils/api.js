import axios from "axios";

import {Message} from 'element-ui'

import router from "../router";

// axios.interceptors.response.use(config => {
//     if (window.sessionStorage.getItem('tokenStr')) {
//         config.headers['Authorization'] = window.sessionStorage.getItem('tokenStr');
//
//     }
//     return config;
// }, error => {
//     console.log(error)
// })
axios.defaults.baseURL = 'http://127.0.0.1:8081/';
//响应拦截器
axios.interceptors.response.use(success => {
    //判断业务逻辑错误
    if (success.status && success.status == 200) {

        // alert('SUCCESS')
        if (success.data.code == 500 || success.data.code == 401) {
            Message.error({message: success.data.message});
            return;
        }

        if (success.data.message) {
            Message.success({message: success.data.message});
        }

        return success.data;
    }
}, error => {

    // alert('ERROR')
    Message.error({message: '网络错误'})
    if (error.response.code == 401) {
        router.replace('/')
    }
    return;

});

let base = '';

export const postRequest = (url, params) => {

    //alert(base + url)
    return axios({
        method: 'post',
        url: base + url,
        data: params
    })
}

export const getRequest = (url, params) => {

    //alert(base + url)
    return axios({
        method: 'get',
        url: base + url,
        data: params
    })
}
