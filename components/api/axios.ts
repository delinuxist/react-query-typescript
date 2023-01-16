import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:4000"
});


export const axiosDummy = axios.create({
  baseURL: "http://dummyjson.com"
})