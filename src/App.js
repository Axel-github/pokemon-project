import React from "react";
//import PokemonCard from "./components/card/PokemonCard";
import PokemonDataGrid from "./components/PokemonDataGrid";

import Layout from "./components/layout/Layout";
import MyHeader from "./components/myHeader";

function App() {
  //("Bulbasaur", "A strange seed was planted on its back at birth.");


  const bulba = {
    name: "Bulbasaur",
    description: "A strange seed was planted on its back at birth."
  }

  const pokemons = [bulba]



  return (
    <Layout>
      <MyHeader />
      <PokemonDataGrid pokemons={pokemons} />

    </Layout>
  );
};
export default App;


// todo layout компонент, в который встраиваются др компоненты +
// API папка, файл с запросом для импорта +
// Axios для запросов +
// компоненты по папкам +
// Header (название)+
// src папка -> images; icons +








// модалка: через порталы  