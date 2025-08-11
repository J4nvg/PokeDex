function determineCatch(name, catchrate) {
    console.log(`Throwing a Pokeball at ${name}...`);
    const chance = catchrate / 255;
    // console.log(`${name} has cr of ${catchrate}, chance is ${chance}`)
    return Math.random() < chance;
}
export async function commandCatch(state, pokemon, ball = undefined) {
    if (!pokemon) {
        console.log("To catch a Pokemon you need to add the pokemon to the command.\n catch <Pokemon>.");
    }
    else {
        const api = state.pokeAPI;
        const fetchedPokemonInformation = await api.fetchPokemonForCatching(pokemon);
        if (determineCatch(fetchedPokemonInformation.name, fetchedPokemonInformation.capture_rate)) {
            const InformationToStore = await api.fetchPokemon(pokemon);
            state.pokedex[InformationToStore.name] = InformationToStore;
            console.log(fetchedPokemonInformation.name, "was caught!");
        }
        else {
            console.log(fetchedPokemonInformation.name, "escaped!");
        }
    }
}
