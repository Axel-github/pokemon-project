import React from "react";
import "./layout.css";



function Layout(props) {






  return (
    <div className="layout">
      {props.children}
    </div>
  );
}

export default Layout;