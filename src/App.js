import React from "react";
import PokemonCard from "./components/card/PokemonCard";
import PokemonDataGrid from "./components/PokemonDataGrid";
import { Pokemon } from "./models/Pokemon";
import Layout from "./components/layout/Layout";

function App() {
  const bulba = new Pokemon("Bulbasaur", "A strange seed was planted on its back at birth.");
  const pikachu = new Pokemon("Pikachu", "Электрическая мышь")

  const pokemons = [bulba, pikachu, pikachu, pikachu, pikachu]



  return (
    <Layout>

      <PokemonDataGrid pokemons={pokemons} />

    </Layout>
  );
};
export default App;


// todo layout компонент, в который встраиваются др компоненты +
// API папка, файл с запросом для импорта ++
// Axios для запросов +
// компоненты по папкам +
// Header 
// src папка -> images; icons 
// модалка: через порталы  