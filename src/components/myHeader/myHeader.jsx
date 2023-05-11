import React from "react";
import logo from '../../images/logo.png';
import './myHeader.css'


const MyHeader = () => {


  const changeBgColor = () => {
    // генерируем случайный цвет в формате HEX
    const newColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    //setBgColor(newColor); // устанавливаем новый цвет фона
    document.getElementsByClassName("layout")[0].style.backgroundColor = newColor;
  };

  return (
    <div className="myHeader">
      <div className="wrapper">


        <div className="logo">
          <img id="logo" src={logo} onClick={changeBgColor} alt="logo" />

        </div>
        <nav>
          <ul className="nav-list">
            <li className="nav-item">
              <a className="nav-link" href="https://vk.com/just_axel">
                Мой ВК
              </a>
            </li>

          </ul>
        </nav>


      </div>

    </div>
  );
};



export default MyHeader;

