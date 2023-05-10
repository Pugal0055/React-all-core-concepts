import axios from "axios";

// Create an Axios instance with the base URL for your API

const api = axios.create({
  baseURL: "https://react-http-231de-default-rtdb.firebaseio.com/",
  headers: {
    "Content-Type": "application/json",
  },
});

// Create functions for each CRUD operation using the Axios methods

export const getAll = async (path: string) => {
  const responce = await api.get(`${path}`);

  return responce.data;
};

export const getOne = async (id: any) => {
  const responce = await api.get(`/${id}`);
  return responce.data;
};

export const create = async (path: string, data: any) => {
  const responce = await api.post(`${path}`, data);
  return responce.data;
};

export const update = async (id: any, data: any) => {
  const responce = await api.put(`/tasks/${id}.json`, data);
  return responce.data;
};

export const remove = async (id: any) => {
  const responce = await api.delete(`/tasks/${id}.json`);
  return responce.data;
};
