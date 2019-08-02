import axios from 'axios'
import { showFullScreenLoading, hideFullScreenLoading, showFailToast} from '../utils/commons'

let baseURL = '/';
const _axios = axios.create({
  baseURL,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
});

// Add a request interceptor
_axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  showFullScreenLoading();
  return config;
}, function (error) {
  // Do something with request error
  showFailToast();
  return Promise.reject(error);
});

// Add a response interceptor
_axios.interceptors.response.use(function (response) {
  // Do something with response data
  setTimeout(() => {
    hideFullScreenLoading();
  }, 1000);
  return response.data;
}, function (error) {
  // Do something with response error
  hideFullScreenLoading();
  showFailToast();
  return Promise.reject(error);
});


export default _axios