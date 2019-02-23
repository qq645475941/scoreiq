import axios from 'axios';
import md5 from 'md5';
import qs from 'qs';

import {router} from '../../router'

if (process.env.NODE_ENV === 'production') {
  axios.defaults.baseURL = 'http://dev.api.ihanli.top';
}
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
let baseUrl = '/index.php';
export default {
  login(data) {
    let reqData = {
      s: `user.login`,
      ...this.signData(data, false),
    }
    return axios.post(baseUrl, qs.stringify(reqData)).then(this.successHandle);
  },
  get(url, data) {
    let signData = this.signData(data);
    let reqUrl = '';
    for (let key in signData) {
      reqUrl += `&${key}=${signData[key]}`;
    }
    reqUrl = baseUrl + '?s=' + url + reqUrl;
    return axios.get(reqUrl).then(this.successHandle);
  },
  post(url, data) {
    let reqData = {
      s: `${url}`,
      ...this.signData(data),
    }
    return axios.post(baseUrl, qs.stringify(reqData)).then(this.successHandle);
  },
  signData(data, isToken = true) {
    let key = 'Gd@dfsdfhjbh&d28y31DF',
      token;
    let timestamp = Math.round(new Date().getTime() / 1000);
    let dataStr = JSON.stringify(data);
    let md5Str = `${timestamp}${key}${dataStr}`;
    if (isToken) {
      token = localStorage.getItem('token');
      if(!token) {
        router.push('/login');
        return;
      }
      md5Str = `${timestamp}${key}${dataStr}${token}`;
    }
    let sign = md5(md5Str);
    let result = {
      data: dataStr,
      sign,
      timestamp,
      token
    }
    if (!isToken) {
      delete result.token;
    }
    return result
  },
  successHandle(res) {
    if (res.data && res.data.ret === 200) {
      return res.data;
    }
  }

}