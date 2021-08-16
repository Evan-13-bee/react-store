import axios from 'axios';


const API = {
  sendRequest: (value: boolean) => {
    return axios.post('https://neko-cafe-back.herokuapp.com/auth/test', {success: value});
  }
};


export default API;