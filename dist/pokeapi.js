export class PokeAPI {
    static baseURL = "https://pokeapi.co/api/v2";
    constructor() { }
    async fetchLocations(pageURL) {
        try {
            const fullURL = PokeAPI.baseURL + "/location-area" + (pageURL === null ? "" : pageURL);
            // console.log(fullURL)
            const response = await fetch(fullURL, {
                method: "GET"
            });
            return response.json();
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
            // console.log(fullURL)
            const response = await fetch(fullURL, {
                method: "GET",
            });
            return response.json();
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
