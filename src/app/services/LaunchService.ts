import { api } from "../api";

// Função para buscar os dados da rota /launches
export const fetchLaunchesData = async ({ queryKey }: { queryKey: any[] }) => {
  const [_, params] = queryKey;

  const response = await api.get("/launches", {
    params,
  });
  return response.data;
};

// Função para buscar os dados da rota /launches/stats
export const fetchStatsData = async () => {
  const response = await api.get("/launches/stats");
  return response.data;
};
