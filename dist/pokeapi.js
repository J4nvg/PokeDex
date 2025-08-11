import { Cache } from "./pokecache.js";
export class PokeAPI {
    static baseURL = "https://pokeapi.co/api/v2";
    cache = new Cache(10000);
    constructor() { }
    async fetchLocations(pageURL) {
        try {
            const fullURL = PokeAPI.baseURL + "/location-area" + (pageURL === null ? "" : pageURL);
            const cached = this.cache.get(fullURL);
            if (cached) {
                return cached;
            }
            const response = await fetch(fullURL, {
                method: "GET"
            });
            const jsonRespone = await response.json();
            this.cache.add(fullURL, jsonRespone);
            return jsonRespone;
        }
        catch (err) {
            if (err instanceof Error) {
                throw err;
            }
            else {
                throw new Error(String(err));
            }
        }
    }
    async fetchLocation(locationName) {
        try {
            const fullURL = PokeAPI.baseURL + "/location-area/" + locationName;
            const cached = this.cache.get(fullURL);
            if (cached) {
                return cached;
            }
            const response = await fetch(fullURL, {
                method: "GET",
            });
            const jsonRespone = await response.json();
            this.cache.add(fullURL, jsonRespone);
            return jsonRespone;
        }
        catch (err) {
            if (err instanceof Error) {
                throw err;
            }
            else {
                throw new Error(String(err));
            }
        }
    }
    async fetchPokemonForCatching(pokemon) {
        try {
            const fullURL = PokeAPI.baseURL + "/pokemon-species/" + pokemon;
            const cached = this.cache.get(fullURL);
            if (cached) {
                return cached;
            }
            const response = await fetch(fullURL, {
                method: "GET",
            });
            const jsonRespone = await response.json();
            this.cache.add(fullURL, jsonRespone);
            return jsonRespone;
        }
        catch (err) {
            if (err instanceof Error) {
                throw err;
            }
            else {
                throw new Error(String(err));
            }
        }
    }
    async fetchPokemon(pokemon) {
        try {
            const fullURL = PokeAPI.baseURL + "/pokemon/" + pokemon;
            const cached = this.cache.get(fullURL);
            if (cached) {
                return cached;
            }
            const response = await fetch(fullURL, {
                method: "GET",
            });
            const jsonRespone = await response.json();
            this.cache.add(fullURL, jsonRespone);
            return jsonRespone;
        }
        catch (err) {
            if (err instanceof Error) {
                throw err;
            }
            else {
                throw new Error(String(err));
            }
        }
    }
}
