import axios from "axios";
import {
  ApiData,
  PokemonDetails,
  apiDataSchema,
  pokemonDetailsSchema,
  PagintationQuery,
  formDetailsSchema,
  FormDetails,
} from "./schemas";

export const formatPaginationQuery = (
  pagination?: PagintationQuery
): string => {
  if (!pagination) {
    return "";
  }

  const queryParts: string[] = [];

  if (pagination.limit !== undefined) {
    queryParts.push(`limit=${pagination.limit}`);
  }

  if (pagination.offset !== undefined) {
    queryParts.push(`offset=${pagination.offset}`);
  }

  return queryParts.length > 0 ? `?${queryParts.join("&")}` : "";
};

export const listPokemons = async (
  pagination?: PagintationQuery
): Promise<ApiData> => {
  const paginationQuery = formatPaginationQuery(pagination);
  const response = await axios.get(
    `https://pokeapi.co/api/v2/pokemon${paginationQuery}`
  );
  const data = apiDataSchema.parse(response.data);
  return data;
};

// TODO: define response types for axios return types
export const getPokemonDetails = async (
  name: string
): Promise<PokemonDetails> => {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const pokemonDetail = pokemonDetailsSchema.parse(response.data);
  return pokemonDetail;
};

export const getFormDetails = async (name: string): Promise<FormDetails> => {
  const response = await axios.get(
    `https://pokeapi.co/api/v2/pokemon-form/${name}/`
  );
  const formDetail = formDetailsSchema.parse(response.data);
  return formDetail;
};
