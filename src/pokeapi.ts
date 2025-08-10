

export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";

  constructor() {}

  async fetchLocations(pageURL?: string | null): Promise<ShallowLocations> {
    try{
        const fullURL = PokeAPI.baseURL+"/location-area"+(pageURL === null ? "" : pageURL);
        // console.log(fullURL)
    const response = await fetch(fullURL,{
    method: "GET"
    })

    return response.json()
  } catch (err) {
    if (err instanceof Error) {
      throw err;
    }
    else{
           throw new Error(String(err));
    }
  }
}

  async fetchLocation(locationName: string): Promise<Location> {
      try{
    const fullURL = PokeAPI.baseURL+"/location-area/"+locationName;
    // console.log(fullURL)
    const response = await fetch(fullURL,{
    method: "GET",
    })

    return response.json()
  } catch (err) {
    if (err instanceof Error) {
      throw err;
    }
    else{
           throw new Error(String(err));
    }
  }
  }
}

export type ShallowLocations = {
  count: number; 
  next: string | null; 
  previous: string | null; 
  results: {
    name: string;
    url: string;
  }[];
};

export type Location = {
  id: number;
  name: string;
  game_index: number;
  encounter_method_rates: {
    encounter_method: {
      name: string;
      url: string;
    };
    version_details: {
      rate: number;
      version: {
        name: string;
        url: string;
      };
    }[];
  }[];
  location: {
    name: string;
    url: string;
  };
  names: {
    name: string;
    language: {
      name: string;
      url: string;
    };
  }[];
  pokemon_encounters: {
    pokemon: {
      name: string;
      url: string;
    };
    version_details: {
      version: {
        name: string;
        url: string;
      };
      max_chance: number;
      encounter_details: {
        min_level: number;
        max_level: number;
        condition_values: {
          name: string;
          url: string;
        }[];
        chance: number;
        method: {
          name: string;
          url: string;
        };
      }[];
    }[];
  }[];
};
