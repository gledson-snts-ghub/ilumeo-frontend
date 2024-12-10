import axios, { AxiosInstance } from "axios";

export class ApiService {
  private api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL:
        process.env.API_BASE_URL || "https://starting-docker.onrender.com",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  async get<T>(endpoint: string): Promise<T | undefined> {
    try {
      const response = await this.api.get<T>(endpoint);
      return response.data;
    } catch (error) {
      console.error(`Erro ao fazer GET em ${endpoint}`, error);
      return undefined;
    }
  }

  async post<T, U>(endpoint: string, data: U): Promise<T | undefined> {
    try {
      const response = await this.api.post<T>(endpoint, data);
      return response.data;
    } catch (error) {
      console.error(`Erro ao fazer POST em ${endpoint}`, error);
      return undefined;
    }
  }

  async put<T, U>(endpoint: string, data: U): Promise<T | undefined> {
    try {
      const response = await this.api.put<T>(endpoint, data);
      return response.data;
    } catch (error) {
      console.error(`Erro ao fazer PUT em ${endpoint}`, error);
      return undefined;
    }
  }

  async delete<T>(endpoint: string): Promise<T | undefined> {
    try {
      const response = await this.api.delete<T>(endpoint);
      return response.data;
    } catch (error) {
      console.error(`Erro ao fazer DELETE em ${endpoint}`, error);
      return undefined;
    }
  }
}
