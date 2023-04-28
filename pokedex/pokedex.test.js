const Pokedex = require('./pokedex')
const fetchPokemon = require('./api')

test("adds pikachu to pokedex", async () => {
    const pokedex = new Pokedex(); // creates a new instance of 'Pokedex' and assigns it to 'pokedex' value;
    await pokedex.catch('pikachu'); // waits for the 'cathc()' method of sad instance to resolve the string 'picachu' and add it to the pokemon array;
    expect(pokedex.pokemonArray.length).toBe(1); // checks the lenght of the array which should be 1 with pikachu added.
});

test("adds pikachu to pokedex", async () => {
    const pokedex = new Pokedex(); 
    const pokemon1 = await pokedex.catch('pikachu'); 
    const pokemon2 = await pokedex.catch('jigglypuff'); 
    expect(pokedex.pokemonArray.length).toBe(2);
    
});