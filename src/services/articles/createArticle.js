import axios from 'services/configApi';

export const getListCountriesAPI = async (data) => {
  try {
    const result = await axios(`articles`, {
        method: "POST",
        headers: {'Content-Type':'application/json'},
        body : JSON.stringify(data)
      })

    return result.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
