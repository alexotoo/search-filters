import axios from "axios";

export const api = axios.create({
  baseURL: "http://jsonplaceholder.typicode.com/",
});

export const getPosts = async () => {
  const response = await api.get("/posts");

  console.log(response.data);
  return response.data;
};
