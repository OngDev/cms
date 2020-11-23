import * as request from "axios";
import moment from "moment-timezone";
// Next we make an 'instance3' of it

const axios = request.create({
  // .. where we make our configurations
  baseURL: `https://blog-api-master.herokuapp.com/`
});

axios.interceptors.request.use(
  config => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.common["Authorization"] = `Bearer ${token}`;
      config.headers.common["Timezone"] = moment.tz.guess();
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
// Where you would set stuff like your 'Authorization' header, etc ...
// let token = await AsyncStorage.getItem("token");
//axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

// Also add/ configure interceptors && all the other cool stuff

export default axios;
