import React, { useState, useEffect } from "react";
import PokemonCard from "../card/PokemonCard";
//import { getPokemonList } from "../../api/getPokemonList";
import "./PokemonDataGrid.css";
import InfiniteScroll from "react-infinite-scroll-component";
import { getPokemons } from "../../api/getPokemons";

const PokemonDataGrid = () => {
  const [pokemons, setPokemons] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    getPokemons(120, 0).then((pokemons) => {
      const updatedPokemons = pokemons.map((pokemon) => ({
        ...pokemon
      }));
      setPokemons(updatedPokemons);
    });
  }, []);

  const fetchMoreData = () => {
    if (pokemons.length >= 1118) {
      setHasMore(false);
      return;
    }

    getPokemons(20, pokemons.length).then((newPokemons) => {
      const updatedNewPokemons = newPokemons.map((pokemon) => ({
        ...pokemon
      }));
      setPokemons([...pokemons, ...updatedNewPokemons]);
    });
  };

  // // Функция для получения id покемона из url
  // const getPokemonIdFromUrl = (url) => {
  //   const urlParts = url.split("/");
  //   return urlParts[urlParts.length - 2];
  // };

  return (
    <div >
      <InfiniteScroll className="pokemon-data-grid"
        dataLength={pokemons.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
      >
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} className="сard" />
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default PokemonDataGrid;
