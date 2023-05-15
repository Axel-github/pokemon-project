import React from "react";
import logo from '../../images/logo.png';
import './myHeader.css'


const MyHeader = () => {

  return (
    <div className="myHeader">
      <div className="wrapper">
        <div className="logo">
          <img id="logo" src={logo} alt="logo" />

        </div>
        <nav>
          <ul className="nav-list">
            <li className="nav-item">
              <a className="nav-link" rel="noreferrer" href="https://vk.com/just_axel" target="_blank">
                Мой ВК
              </a>

            </li>

          </ul>
        </nav>
      </div>
    </div >
  );
};



export default MyHeader;

