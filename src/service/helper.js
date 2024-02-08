import axios from "axios";

export const BASE_URL = "https://user-crud-app-asz7.onrender.com/api/v1/";

export const myAxios = axios.create({
    baseURL: BASE_URL,
  });

