import axios from '../plugins/axios';

let api = {
  // app列表
  appListData(params){
    return axios.get('/mock/appListData.json', params);
  },
  // 推荐
  recommendData(params) {
    return axios.get('/mock/recomendData.json', params);
  },
  // 搜索
  lookUp(params) {
    return axios.get('/mock/lookUp.json', params);
  }
}

export default api