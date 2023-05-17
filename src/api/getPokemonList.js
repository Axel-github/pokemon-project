import axios from 'axios';
import getPokemonSprite from '../helpers/getPokemonSprite'


export async function getPokemonList(limit, offset) {


  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`,
    headers: {}
  };

  let response = await axios.request(config);
  const pokemons = response.data.results;

  for (let i = 0; i < pokemons.length; i++) {
    const slices = pokemons[i].url.split("/");
    const id = slices[slices.length - 2];
    pokemons[i].id = id;
    // pokemons[i].spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    pokemons[i].spriteUrl = getPokemonSprite(id, 'animated');
  }


  return pokemons;

}
