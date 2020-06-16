import axios from 'axios'

// 全局的 axios 默认值
// axios.defaults.baseURL = '/api';
axios.defaults.baseURL = 'http://192.168.1.104:8080';


axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';


// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  config.params = {
    ...config.params
  }
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});


// 响应拦截器
axios.interceptors.response.use((response) => {
  return response
}, (error) => {
  return Promise.resolve(error)
})


export default axios;
