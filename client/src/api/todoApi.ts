import axios from "axios";

const API = "http://localhost:5000/api/todos";

export const getTodos = async () => {
  const res = await axios.get(API);
  return res.data;
};

export const createTodo = async (title: string) => {
  const res = await axios.post(API, { title });
  return res.data;
};

export const updateTodo = async (id: string, data: any) => {
  const res = await axios.put(`${API}/${id}`, data);
  return res.data;
};

export const deleteTodo = async (id: string) => {
  const res = await axios.delete(`${API}/${id}`);
  return res.data;
};