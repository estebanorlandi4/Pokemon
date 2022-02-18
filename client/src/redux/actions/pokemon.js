import { getPokemons, getDetails } from "utils";

export const GET_POKEMONS = "GET_POKEMONS";
export const GET_DETAILS_POKEMONS = "GET_DETAILS_POKEMONS";
export const REMOVE_DETAILS_POKEMON = "REMOVE_DETAILS_POKEMON";
export const REMOVE_POKEMONS = "REMOVE_POKEMONS";

export const fetchPokemons = (page, type) => {
  return async (dispatch) => {
    const data = await getPokemons(page, type);

    const { results, next, prev } = data;

    const payload = {
      results,
      next,
      prev,
    };

    dispatch({ type: GET_POKEMONS, payload });
  };
};

export const fetchDetails = (id) => {
  return async (dispatch) => {
    const promise = getDetails(id);
    const res = await promise;
    dispatch({ type: GET_DETAILS_POKEMONS, payload: res });
  };
};

export const removeDetails = () => ({ type: REMOVE_DETAILS_POKEMON });
export const removePokemons = () => ({ type: REMOVE_POKEMONS });
