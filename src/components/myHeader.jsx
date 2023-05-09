import React from "react";
import logo from '../images/logo.png';
import './myHeader.css'


const MyHeader = () => {

  return (
    <div className="myHeader">
      <div className="wrapper">
        <div className="logo">
          <img id="logo" src={logo} alt="logo" />

        </div>
      </div>

    </div>
  );
};



export default MyHeader;

