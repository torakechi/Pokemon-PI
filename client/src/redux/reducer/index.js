import { useReducer } from "react";

const initialState = {
    pokemons: [],
    allPokemons: [],
    types: [],
    details: {},
};

const rootReducer = (state = initialState, action) =>{
    switch(action.type){
        case "GET_ALL_POKEMONS":
            return {
                ...state,
                pokemons: action.payload,
                allPokemons: action.payload,
            };
        case "GET_POKEMON_DETAILS":
            return {
                ...state,
                details: action.payload,
            };
        case "CREATE_POKEMON":
            return {
                ...state,
                pokemonCreate: [...state.pokemons, action.payload]
            };
        case "GET_ALL_TYPES":
            return {
                ...state,
                types: action.payload,
                }; 
        case "FILTER_BY_TYPE":
            const allPokemons = state.allPokemons;
            const typesFiltered = action.payload === "All" ? allPokemons : allPokemons.filter(e => e.type.includes(action.payload))
            return{
                ...state,
                pokemons: typesFiltered
                
            };
        case "FILTER_CREATED":
            const createdFilter = action.payload === "created" ? state.allPokemons.filter(e=>e.createdInDb) : state.allPokemons.filter(e=> !e.createdInDb)
            return{
                ...state,
                pokemons: action.payload === "all" ? state.allPokemons : createdFilter,
            };
        case "ORDER_BY_NAME":
            let sortedArr = action.payload === "asc" ? 
            state.pokemons.sort(function(a,b) {
                if(a.name > b.name) {
                    return 1;
                }
                if(b.name > a.name) {
                    return -1
                }
                return 0; // si son iguales los deja como esta
            }):
            state.pokemons.sort(function(a,b) {
                if(a.name > b.name) {
                    return -1;
                }
                if(b.name > a.name) {
                    return 1
                }
                return 0; // si son iguales los deja como esta
            })
            return {
                ...state,
                pokemons: sortedArr
            };
        case "GET_POKEMON_NAME":
            return {
                ...state,
                pokemons: action.payload   
            } 
        case "ORDER_POKEMONS_STATS":
            let sortedArr2 = action.payload === "Min to Max" ? 
            state.pokemons.sort(function(a,b) {
                if(a[action.payload2] > b[action.payload2]) {
                    return 1;
                }
                if(b[action.payload2] > a[action.payload2]) {
                    return -1
                }
                return 0; // si son iguales los deja como esta
            }):
            state.pokemons.sort(function(a,b) {
                if(a[action.payload2] > b[action.payload2]) {
                    return -1;
                }
                if(b[action.payload2] > a[action.payload2]) {
                    return 1
                }
                return 0; // si son iguales los deja como esta
            })
            return {
                ...state,
                pokemons: sortedArr2
            }
        case "EMPTY_POKEMON":
            return{
                ...state,
                pokemons: []
            }
        case "POST_POKEMON":
            return{
                ...state,
            }
            default:
            return state;
    };
};

export default rootReducer;