import axios from "axios";

import { Message, Loading } from "element-ui";

import URL_CONFIG from "./config";

// import store from '@/store';

const BASE_URL = URL_CONFIG.base_url;

let loadingInstance = null; //这里是loading

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 3000,
  headers: {
    "Content-Type": "application/json;charset=UTF-8"
  }
});

// 拦截器
api.interceptors.request.use(
  config => {
    loadingInstance = Loading.service({
      lock: true,
      text: "loading..."
    });
    // 在发送请求之前做些什么
    return config;
  },
  error => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  response => {
    loadingInstance.close();

    return response.data;
  },
  error => {
    loadingInstance.close();

    if (error.response && error.response.status) {
      Message.warning(error.response.data.message);

      return Promise.reject(error.response.data);
    }
  }
);

export default api;
