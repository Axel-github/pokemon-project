import React, { useState, useEffect } from "react";
import PokemonCard from "../card/PokemonCard";
import { getPokemonList } from "../../api/getPokemonList";
import "./PokemonDataGrid.css";
import InfiniteScroll from "react-infinite-scroll-component";

const PokemonDataGrid = () => {
  const [pokemons, setPokemons] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    getPokemonList(120, 0).then((pokemons) => {
      setPokemons(pokemons);
    });
  }, []);

  const fetchMoreData = () => {
    if (pokemons.length >= 1118) {
      setHasMore(false);
      return;
    }

    getPokemonList(20, pokemons.length).then((newPokemons) => {
      setPokemons([...pokemons, ...newPokemons]);
    });
  };

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
