// Import pokemon array of objects to here
import { pokemonArray } from '/data/pokemon.js';


// Create variables
const cardContainer = document.getElementById("card-container");


// Create a function to to insesrt this data into <main class="card-container"></main> inner html

const insertPokemon = () => {
  pokemonArray.forEach((pokemon) => {
    cardContainer.innerHTML += `
    <div class="card">
      <img class="card__image" src="${pokemon.sprite}">
      <div class="card__content">
        <h3 class="card__heading">${pokemon.name}</h3>
        <p class="card__text">${pokemon.name} (#${pokemon.id}) is a ${pokemon.types.join(' & ')} type pokemon</p>
      </div>
    </div>`;
  })
}

// Call the function
insertPokemon();