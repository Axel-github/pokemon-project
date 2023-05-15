import React from "react";
import PokemonDataGrid from "./components/PokemonDataGrid/PokemonDataGrid";
import Layout from "./components/layout/Layout";
import MyHeader from "./components/myHeader/myHeader";
import Sidebar from "./components/sidebar/sidebar";
import Footer from "./components/footer/footer";

function App() {

  return (
    <Layout>
      <MyHeader className="layout-header" />

      <div className="layout-main">
        <Sidebar className="left" />
        <PokemonDataGrid className="layout-datagrid" />
        <Sidebar className="right" />
      </div>

      <Footer className="layout-footer" />

    </Layout>
  );
};
export default App;











// todo: cache API