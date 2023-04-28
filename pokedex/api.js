// const Pokemon = require('./api.js')

const fetchPokemon = (pokemon) => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((response) => response.json())
    .then((data) => console.log({
        name: data.name,
        id: data.id, 
        height: data.height,
        weight: data.weight,
        types: data.types.map(item => item.type.name), // maps over data.types array and returns a new array with just the name of each type object
        //this is an array.prototype.map() method used to transform each element of an array -> 'item' being the element of the array which is iterated over
    }));
};

fetchPokemon('pikachu')
  
module.exports = fetchPokemon;

