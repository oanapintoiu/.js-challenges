const fetchPokemon = require('./api')

test('fetchPokemon returns a promise of the useful pokemon data', (done) => {
      fetchPokemon('snorlax')
        .then((pokemon) => {
          expect(pokemon.id).toEqual(143);
          done();
        });
    });

    describe('fetchPokemon', () => {
        it('returns a promise of the useful pokemon data', () => {
          fetchPokemon('snorlax')
            .then((pokemon) => {
              expect(pokemon.id).toEqual(143);
            });
        });
      });


      it('returns a promise of the useful pokemon data', () => {
        fetchPokemon('snorlax')
          .then((pokemon) => {
            expect(pokemon.name).toEqual('snorlax');
          });
      });

      it('returns a promise of the useful pokemon data', async () => {
       const pokemon = await fetchPokemon('snorlax');
            expect(pokemon.name).toEqual('snorlax');
      });

      describe('fetchPokemon', () => {
        it('returns a promise of the useful pokemon data', async () => {
          const pokemon = await fetchPokemon('snorlax');
          expect(pokemon.id).toEqual(143);
          expect(pokemon.name).toEqual('snorlax');
        });
      });
      