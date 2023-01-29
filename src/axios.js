import axios from 'axios';

let baseURL;
if (process.env.ENV === 'development') {
    baseURL = 'http://localhost:5050';
} else {
    baseURL = 'http://localhost:5050';
}

const instance = axios.create({ baseURL });

export default instance;
