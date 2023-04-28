// const Pokemon = require('./api.js')

const fetchPokemon = (pokemon) => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((response) => response.json())
    .then((data) => console.log(data));
};

fetchPokemon('pikachu')
  
module.exports = fetchPokemon;

