import axios from 'axios';


export async function getPokemonInfo(name) {

    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `https://pokeapi.co/api/v2/pokemon/${name}/`,
        headers: {}
    };

    // axios.request(config)
    //   .then((response) => {
    //     console.log(response.data.results);
    //     return response.data.results;
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     return [];
    //   }).finally(() => [])
    return await axios.request(config);

}
