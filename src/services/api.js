import axios from 'axios';

// Configuração da base URL para as requisições à API do GitHub
const api = axios.create({
  baseURL: 'https://api.github.com/',
});

export const fetchUserData = async (username) => {
  try {
    const response = await api.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar dados do usuário:", error);
    throw error;
  }
};

export const fetchUserRepos = async (username) => {
  try {
    const response = await api.get(`/users/${username}/repos`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar repositórios do usuário:", error);
    throw error;
  }
};
