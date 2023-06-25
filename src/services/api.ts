import axios from "axios";
import { BASE_URL } from "./constants";

export const getPokemons = async () => {
  const response = await axios.get(`${BASE_URL}/pokemon?limit=10`);
  return response.data;
};

export const getPokemonDetails = async (id: string) => {
  const response = await axios.get(`${BASE_URL}/pokemon/${id}`);
  return response.data;
};

export const searchPokemons = async (searchTerm) => {
  const response = await axios.get(`${BASE_URL}/pokemon/${searchTerm}`);
  return response.data;
};
