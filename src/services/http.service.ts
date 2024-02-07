import axios, { AxiosRequestConfig, Method } from 'axios';

import { config } from '@constants/config';

const http = axios.create({ baseURL: `${config.apiServer}/` });

const request = (method: Method, url: string, options: AxiosRequestConfig) => {
  return http
    .request({
      ...options,
      method,
      url,
    })
    .then(httpResponseHandler)
    .catch(httpErrorHandler);
};

const httpResponseHandler = (response: any): any => {
  return response.data;
};

const httpErrorHandler = (err: any) => {
  const response = err?.response;
  const data = response?.data;

  throw {
    ...data,
    message: data?.message || 'Network Error!',
  };
};

export const HttpService = {
  get(url: string, params: any = {}, headers: any = {}) {
    return request('GET', url, { params, headers });
  },
  post(url: string, body: any = {}, headers: any = {}) {
    return request('POST', url, { data: body, headers });
  },
  put(url: string, body: any = {}, headers: any = {}) {
    return request('PUT', url, { data: body, headers });
  },
  patch(url: string, body: any = {}, headers: any = {}) {
    return request('PATCH', url, { data: body, headers });
  },
  delete(url: string, body: any = {}, headers: any = {}) {
    return request('DELETE', url, { data: body, headers });
  },
};
