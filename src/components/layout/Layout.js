import React from "react";
import "./layout.css";



function Layout(props) {






  return (
    <div className="layout">
      {/* <button className="btn layout_change_background_button" onClick={changeBgColor}>Сменить фон</button> */}
      {props.children}
    </div>
  );
}

export default Layout;