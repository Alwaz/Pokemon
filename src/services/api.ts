import axios from "axios";
import { BASE_URL } from "./constants";

export const getPokemons = async (offset: number, limit: number) => {
  const response = await axios.get(
    `${BASE_URL}/pokemon?offset=${offset}&limit=${limit}`
  );
  return response.data;
};

export const getPokemonDetails = async (id: string | undefined) => {
  const response = await axios.get(`${BASE_URL}/pokemon/${id}`);
  return response.data;
};

export const searchPokemons = async (searchTerm: string) => {
  const response = await axios.get(`${BASE_URL}/pokemon/${searchTerm}`);
  return response.data;
};
