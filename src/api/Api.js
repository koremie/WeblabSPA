import axios from 'axios';

const axiosInit = axios.create({
  baseURL: "http://localhost:5050/animals",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getAllItems = async () => {
  return (await axiosInit.get()).data;
};

export const getItemById = async (id) => {
  console.log(id);
  return (await axiosInit.get(`/${id}`)).data;
};

export const getItemsFiltered = async(filters) => {
  return (await axiosInit.get(`/filtered`, { params: filters })).data;
};