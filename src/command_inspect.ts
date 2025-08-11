import type { State } from "./state.js";
import type { Pokemon } from "./pokemonType.js";

export async function commandInspect(state: State,pokemon:string) {
    if(!pokemon){
        console.log("To inspect a Pokemon you need to add the pokemon to the command.\n inspect <Pokemon>.")
    }else{
    const api = state.pokeAPI;
    if(state.pokedex[pokemon]){
       console.log("Name:",state.pokedex[pokemon].name)
       console.log("Height:",state.pokedex[pokemon].height)
       console.log("Weight:",state.pokedex[pokemon].weight)
       console.log("Stats:")
       for(const stat of state.pokedex[pokemon].stats ){
        console.log(`\t- ${stat.stat.name}: ${stat.base_stat}`)
       }
        console.log("Types:")
       for(const type of state.pokedex[pokemon].types ){
        console.log(`\t- ${type.type.name}`)
       }
    }else{
        console.log("You have not caught that pokemon...");
    }
    }
}
