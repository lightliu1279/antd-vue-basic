import axios from 'axios';
import config from '@/config';

const API_BASE_URL = config.apiBaseUrl;
const API = axios.create({
  baseURL: API_BASE_URL
});

const BasicApi = options => {
  return new Promise((resolve, reject) => {
    API(options)
      .then(res => {
        const { errors } = res.data;
        if (errors) return Promise.reject(errors);
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const tables = params => {
  return BasicApi({
    params,
    methods: 'get'
  });
};
