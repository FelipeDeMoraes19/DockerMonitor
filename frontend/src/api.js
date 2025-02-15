import axios from "axios";

const API_URL = "http://127.0.0.1:8000";

export const getContainers = async () => {
  try {
    const response = await axios.get(`${API_URL}/containers`);
    return response.data.containers;
  } catch (error) {
    console.error("Erro ao buscar contêineres:", error);
    return [];
  }
};
