//компонент, который отрисовывает инфу про покемонов

import React from "react";





function PokemonCard(props) {
  const [name, setName] = React.useState(props.pokemon.name);

  const handleInputChange = (event) => {
    setName(event.target.value);
  }  //обновляет значение переменной "name", чтобы соответствовать тому, что ввел пользователь.

  return (
    <div>
      <h2>{name}</h2>
      <input type="text" value={name} onChange={handleInputChange} />
      <p>{props.pokemon.description}</p>
    </div>
  );
}

export default PokemonCard;

// import React from "react";




// function PokemonCard(props) {
//   const pokemon = props.pokemon;
//   return (
//     <div>
//       <h2>{pokemon.name}</h2>
//       <p>{pokemon.description}</p>
//     </div>
//   );
// }

// export default PokemonCard;




//todo Карточка должна выводить информацию об объекте Pokemon. Необходимо создать класс Pokemon и в нем описать name и description

