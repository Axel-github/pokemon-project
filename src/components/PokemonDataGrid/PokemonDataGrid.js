import React, { useState, useEffect } from "react";
import PokemonCard from "../card/PokemonCard";
import "./PokemonDataGrid.css";
import InfiniteScroll from "react-infinite-scroll-component";
import { getPokemons } from "../../api/getPokemons";
import Modal from '../modal/modal';

const PokemonDataGrid = () => {
  const [pokemons, setPokemons] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  const [open, setOpen] = useState(false);
  const [pokemon, setPokemon] = useState({});

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

  return (
    <div>
      <InfiniteScroll
        className="pokemon-data-grid"
        dataLength={pokemons.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={
          <div className="loader" key={0}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        }
      >
        {pokemons.map((pokemon) => (
          <PokemonCard
            setOpen={setOpen}
            setPokemon={setPokemon}
            key={pokemon.name}
            pokemon={pokemon}
            className="сard"
          />
        ))}
      </InfiniteScroll>

      {open && (
        <Modal
          pokemon={pokemon}
          isOpen={open}
          handleCloseModal={setOpen}
        />
      )}
    </div>
  );
};

export default PokemonDataGrid;
