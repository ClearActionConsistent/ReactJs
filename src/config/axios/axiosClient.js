import axios from 'axios';
// import queryString from 'query-string';

const getLocalToken = () => {
  const token = window.localStorage.getItem('token')
  console.log('token >>>', token);
  return token
}

const axiosClient = axios.create({
  baseURL: process.env.BASE_URL || 'https://jsonplaceholder.typicode.com/',
  headers: {
    'content-type': 'application/json',
    Authorization: `Bearer + ${getLocalToken} `,
  },
  // paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(
  async (config) => {
    const token = '# Your token goes over here';
    if (token) {
      config.headers.accessToken = token;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    // Handle errors
    return Promise.reject(error);
  }
);
export default axiosClient;
