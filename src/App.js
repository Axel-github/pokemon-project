import React from "react";
//import PokemonCard from "./components/card/PokemonCard";
import PokemonDataGrid from "./components/PokemonDataGrid/PokemonDataGrid";
//import ChangeBG from "./components/BgColor"
import Layout from "./components/layout/Layout";
import MyHeader from "./components/myHeader/myHeader";
import Sidebar from "./components/sidebar/sidebar";

function App() {
  //("Bulbasaur", "A strange seed was planted on its back at birth.");





  return (
    <Layout>
      <MyHeader className="layout-header" />

      <div className="layout-main">
        <Sidebar className="left" />
        <PokemonDataGrid className="layout-datagrid" />
        <Sidebar className="right" />
      </div>

      <div className="layout-footer"> FOOTER </div>

    </Layout>
  );
};
export default App;











// модалка: через порталы  