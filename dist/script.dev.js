"use strict";

var _pokemon = require("/data/pokemon.js");

// Import pokemon array of objects to here
// Create variables
var cardContainer = document.getElementById("card-container"); // Create a function to to insesrt this data into <main class="card-container"></main> inner html

var insertPokemon = function insertPokemon() {
  _pokemon.pokemonArray.forEach(function (pokemon) {
    cardContainer.innerHTML += "\n    <div class=\"card\">\n      <img class=\"card__image\" src=\"".concat(pokemon.sprite, "\">\n      <div class=\"card__content\">\n        <h3 class=\"card__heading\">").concat(pokemon.name, "</h3>\n        <p class=\"card__text\">").concat(pokemon.name, " (#").concat(pokemon.id, ") is a ").concat(pokemon.types.join(' & '), " type pokemon</p>\n      </div>\n    </div>");
  });
}; // Call the function


insertPokemon();