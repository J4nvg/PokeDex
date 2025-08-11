import { Location } from "./pokeapi.js";
import type { State } from "./state.js";

function printer(location:Location):void{
console.log(`Exploring ${location.name}...`)
console.log(`Found Pokemon:`)
for(const result of location.pokemon_encounters){
        console.log(" -",result.pokemon.name);
    }
}


export async function commandExplore(state: State,location:string ) {
    if(!location){
        console.log("To explore a part of the map you need to add a location.\n explore <location>.")
    }else{
        
    const api = state.pokeAPI;
    const fetchedLocation = await api.fetchLocation(location);
    printer(fetchedLocation);
    
    }
}
