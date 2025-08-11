import type { State } from "./state.js";
import type { Pokemon } from "./pokemonType.js";

function determineCatch(name:string,catchrate:number){
    console.log(`Throwing a Pokeball at ${name}...`);
    const chance = catchrate / 255;
    // console.log(`${name} has cr of ${catchrate}, chance is ${chance}`)
  return Math.random() < chance;
}

export async function commandCatch(state: State,pokemon:string, ball:string | undefined = undefined) {
    if(!pokemon){
        console.log("To catch a Pokemon you need to add the pokemon to the command.\n catch <Pokemon>.")
    }else{
    const api = state.pokeAPI;
    const fetchedPokemonInformation = await api.fetchPokemonForCatching(pokemon);
    if(determineCatch(fetchedPokemonInformation.name,fetchedPokemonInformation.capture_rate)){
        const InformationToStore = await api.fetchPokemon(pokemon);
        state.pokedex[InformationToStore.name] = InformationToStore as Pokemon;
        console.log(fetchedPokemonInformation.name,"was caught!");
    }else{
        console.log(fetchedPokemonInformation.name,"escaped!");
    }
    }
}
