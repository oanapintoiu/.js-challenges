const fetchPokemon = require('./api')

class Pokedex {
    constructor () {
this.pokemonArray = [];
    }

   async catch(pokemon) {                       // an asynchronous functin that takes on one parameter called pokemon;
    const data = await fetchPokemon(pokemon);   // declares a constant named data and uses 'await' to wait and for the fetchPokemon function to finish and return the value 
    this.pokemonArray.push(data);              // the fetched data is then passed on to the pokemon parameter.
   } 

   all() {
    return this.pokemonArray;
   };


};

module.exports = Pokedex;