export async function commandPokedex(state) {
    const api = state.pokeAPI;
    if (Object.values(state.pokedex).length > 0) {
        console.log("Your Pokedex:");
        for (const k of Object.keys(state.pokedex)) {
            console.log(`\t- ${k}`);
        }
    }
    else {
        console.log("You have no Pokemon in your Pokedex.");
    }
}
