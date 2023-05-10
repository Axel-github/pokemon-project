import React, { useState } from "react";
import "./layout.css";
import


  function Layout(props) {


    const [bgColor, setBgColor] = useState("#00bfff "); // начальный цвет фона

    const changeBgColor = () => {
      // генерируем случайный цвет в формате HEX
      const newColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
      setBgColor(newColor); // устанавливаем новый цвет фона
    };


    return (
      <div className="layout" style={{ backgroundColor: bgColor }}>
        {/* <button className="btn layout_change_background_button" onClick={changeBgColor}>Сменить фон</button> */}
        {props.children}
      </div>
    );
  }

export default Layout;