import { commandHelp } from "./command_help.js";
import { commandExit } from "./command_exit.js";
import type { CLICommand } from "./state.js";
import { commandMap, commandMapB } from "./command_map.js";
import { commandExplore } from "./command_explore.js";
import { commandCatch } from "./command_catch.js";
import { commandInspect } from "./command_inspect.js";
import { commandPokedex } from "./command_pokedex.js";

export function getCommands(): Record<string, CLICommand> {
  return {
    help: {
      name: "help",
      description: "Displays a help message",
      callback: commandHelp,
    },
    exit: {
      name: "exit",
      description: "Exit the Pokedex",
      callback: commandExit,
    },
    map: {
      name: "map",
      description: "List location areas.",
      callback: commandMap,
    },
    mapb: {
      name: "mapb",
      description: "Displays the previous 20 locations",
      callback: commandMapB,
    },
    explore: {
      name: "explore",
      description: "Explore pokemon in a certain part of the map.",
      callback: commandExplore,
    },
    catch: {
      name: "catch",
      description: "Try to catch a certain pokemon.",
      callback: commandCatch,
    },
    inspect: {
      name: "inspect",
      description: "Inspect caught pokemon using the Pokedex.",
      callback: commandInspect,
    },
    pokedex: {
      name: "pokedex",
      description: "Inspect what is in your Pokedex.",
      callback: commandPokedex,
    },
  };
}
