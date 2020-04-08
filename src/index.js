import axios from "axios";
import { prop } from "ramda";

const client = axios.create({
  baseURL: ''
});

client.interceptors.response.use(prop("data"), error => console.log(error));

export default client;
