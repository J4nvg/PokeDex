import type { State } from "./state.js";
import {PokeAPI, ShallowLocations} from "./pokeapi.js";
import { url } from "inspector";

function printer(locations:ShallowLocations):void{
for(const result of locations.results){
        console.log(result.name);
    }
}

function checkAndUpdateNextLocation(locations:ShallowLocations,state: State){
 if(locations.next !== null){
    const urlObj= new URL(locations.next);
    state.nextLocationsURL = urlObj.search;
   }else{
    state.nextLocationsURL = null;
   }
}
function checkAndUpdatePrevLocation(locations:ShallowLocations,state: State){
if(locations.previous !== null){
    const urlObj = new URL(locations.previous);
    state.prevLocationsURL = urlObj.search;
   }else{
    state.prevLocationsURL = null;
   }
}

export async function commandMap(state: State) {
    const api = state.pokeAPI;
    const locations = await api.fetchLocations(state.nextLocationsURL);  
    printer(locations);
    checkAndUpdateNextLocation(locations,state);
    checkAndUpdatePrevLocation(locations,state);
}

export async function commandMapB(state: State) {
    const api = state.pokeAPI;
    if(state.prevLocationsURL === null){
        console.log("you're on the first page");
    }else{
    const locations = await api.fetchLocations(state.prevLocationsURL);  
    printer(locations);
    checkAndUpdateNextLocation(locations,state);
    checkAndUpdatePrevLocation(locations,state);
    }
}