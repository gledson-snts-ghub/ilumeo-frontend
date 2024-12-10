import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getAllUsers = async () => {
  try {
    const response = await api.get("/users");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar usuários", error);
    throw error;
  }
};

export const getUserById = async (id: string) => {
  try {
    const response = await api.get(`/users/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar usuário", error);
    throw error;
  }
};

export const createUser = async (data: { name: string; email: string }) => {
  try {
    const response = await api.post("/users", data);
    return response.data;
  } catch (error) {
    console.error("Erro ao criar usuário", error);
    throw error;
  }
};
