import React, { useState } from "react";

function ChangeBgColor() {
    const [bgColor, setBgColor] = useState("#00bfff "); // начальный цвет фона

    const changeBgColor = () => {
        // генерируем случайный цвет в формате HEX
        const newColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        setBgColor(newColor); // устанавливаем новый цвет фона
    };

    return (
        <div style={{ backgroundColor: bgColor }}>
            <button onClick={changeBgColor}>Сменить фон</button>
        </div>
    );
}

export default ChangeBgColor;