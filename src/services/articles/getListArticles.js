import axios from 'services/configApi';

export const getListCountriesAPI = async () => {
  try {
    const result = await axios(`articles`, {
        method: "GET",
        headers: {'Content-Type':'application/json'},
      })

    return result.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
