import axios from "axios";
import { toast } from "react-toastify";

const service = axios.create({
  baseURL: "https://westco-task.herokuapp.com/",
});

service.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    toast.error({
      message: "Error",
    });
    Promise.reject(error).then((r) => error);
  }
);

service.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    let notificationParam = {
      massage: error.response.data.statusCode,
    };

    if (error.response.status === 403 && error.response.status === 401) {
      notificationParam.massage = "Error";
    }
    if (error.response.status === 422) {
      notificationParam.massage = "there is user in the table";
    }
    if (error.response.status === 500) {
      notificationParam.message = "Time Out";
    }
    toast.error(`${notificationParam.massage}`);
    return Promise.reject(error);
  }
);

export default service;
