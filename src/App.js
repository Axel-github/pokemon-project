import React from "react";
//import PokemonCard from "./components/card/PokemonCard";
import PokemonDataGrid from "./components/PokemonDataGrid/PokemonDataGrid";
//import ChangeBG from "./components/BgColor"
import Layout from "./components/layout/Layout";
import MyHeader from "./components/myHeader/myHeader";

function App() {
  //("Bulbasaur", "A strange seed was planted on its back at birth.");





  return (
    <Layout>
      <MyHeader className="layout-header" />

      <div className="layout-main">
        <div className="layout-sidebar"></div>
        <PokemonDataGrid className="layout-datagrid" />
        <div className="layout-sidebar"></div>
      </div>

      <div className="layout-footer"> FOOTER </div>

    </Layout>
  );
};
export default App;











// модалка: через порталы  