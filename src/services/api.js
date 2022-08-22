// a library to wrap and simplify api calls
import apisauce from 'apisauce';

const create = (baseURL = 'https://62df5a62976ae7460beadde5.mockapi.io/') => {
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

  const getContacts = () => api.get('Contact');
  const getMaps = () => api.get('prediction');

  return {
    api,
    setAuthToken,
    setLanguage,
    removeAuthToken,
    getContacts,
    getMaps,
  };
};

// let's return back our create method as the default.
export default create();
