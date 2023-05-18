import axios from "axios";
import getPokemonSprite from "../helpers/getPokemonSprite";
export async function getPokemons(limit, offset) {

  const cacheKey = `pokemons-${limit}-${offset}`;
  const cache = await caches.open('pokeapi-cache');
  const cachedResponse = await cache.match(cacheKey);

  if (cachedResponse) {
    const pokemons = await cachedResponse.json();
    return pokemons;
  } //Cоздает ключ кеша для хранения ответов API и пытается получить ранее закешированный ответ. Если такой ответ найден, он преобразуется в формат JSON и возвращается.



  let data = JSON.stringify({
    "query": "query samplePokeAPIquery($limit: Int, $offset: Int) {\n  results: pokemon_v2_pokemon(limit: $limit, offset: $offset) {\n    name\n    id\n    weight\n  }\n}\n",
    "variables": {
      "limit": limit,
      "offset": offset
    },
    "operationName": "samplePokeAPIquery"
  });

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://beta.pokeapi.co/graphql/v1beta',
    headers: {
      'authority': 'beta.pokeapi.co',
      'accept': '*/*',
      'accept-language': 'en-US,en;q=0.9',
      'content-type': 'application/json',
      'origin': 'https://beta.pokeapi.co',
      'referer': 'https://beta.pokeapi.co/graphql/console/',
      'sec-ch-ua': '"Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"Linux"',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-origin',
      'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36',
      'x-method-used': 'graphiql'
    },
    data: data
  };


  let response = await axios.request(config);
  const pokemons = response.data.data.results;

  for (let i = 0; i < pokemons.length; i++) {
    pokemons[i].spriteUrl = getPokemonSprite(pokemons[i].id, 'animated');
  }

  const cacheResponse = new Response(JSON.stringify(pokemons));
  await cache.put(cacheKey, cacheResponse.clone());

  return pokemons;
}



