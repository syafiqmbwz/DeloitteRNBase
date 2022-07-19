// a library to wrap and simplify api calls
import apisauce from 'apisauce';

const create = (baseURL = 'https://s3-sa-east-1.amazonaws.com/') => {
  const api = apisauce.create({
    // base URL is read from the "constructor"
    baseURL,
    // here are some default headers
    headers: {
      'Cache-Control': 'no-cache',
    },
    // 10 second timeout...
    timeout: 10000,
  });

  const setAuthToken = userAuth => api.setHeader('X-Auth-Token', userAuth);
  const setLanguage = () => api.setHeader('Accept-Language', 'id');
  const removeAuthToken = () => api.setHeader('Authorization', '');

  const getContacts = () => api.get('rgasp-mobile-test/v1/content.json');

  return {
    api,
    setAuthToken,
    setLanguage,
    removeAuthToken,
    getContacts,
  };
};

// let's return back our create method as the default.
export default create();
