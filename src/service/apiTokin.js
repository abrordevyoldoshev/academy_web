import axios from 'axios';
import {toast} from "react-toastify";

const ApiToken = axios.create({
    baseURL: "https://westco-task.herokuapp.com/",
});


// Config
const TOKEN_PAYLOAD_KEY = 'authorization';
const AUTH_TOKEN_TYPE = 'Bearer';

// API Request interceptor
ApiToken.interceptors.request.use(
    (config) => {
        const access_token = localStorage.getItem("token");

        if (access_token) {
            config.headers[TOKEN_PAYLOAD_KEY] = AUTH_TOKEN_TYPE + ' ' + access_token;
        }

        return config;
    },
    (error) => {
        // Do something with request error here
        toast.error({
            message: 'Error',
        });
        Promise.reject(error);
    }
);


ApiToken.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        let notificationParam = {
            message: error.response.data.statusCode,
        };

        // Remove token and redirect
        if (error.response.status === 403 || error.response.status === 401) {
            notificationParam.message = 'Error'
        }

        if (error.response.status === 508) {
            notificationParam.message = 'Time Out';
        }

        toast.error(`${notificationParam.message}`);

        return Promise.reject(error);
    }
);

export default ApiToken;
