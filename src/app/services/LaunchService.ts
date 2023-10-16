import { api } from "../api";

// Função para buscar os dados da rota /launches
export const fetchLaunchesData = async () => {
  const response = await api.get("/launches"); // Substitua pela sua URL real
  return response.data;
};

// Função para buscar os dados da rota /launches/stats
export const fetchStatsData = async () => {
  const response = await api.get("/launches/stats"); // Substitua pela sua URL real
  return response.data;
};
