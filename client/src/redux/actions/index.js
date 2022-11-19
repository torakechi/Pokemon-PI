import axios from "axios";




export const getAllPokemons = () =>{
    return async function (dispatch) {
        let pokemon = await axios ("http://localhost:3001/pokemons");
        return dispatch({ type: "GET_ALL_POKEMONS", payload: pokemon.data });

    };
}; 

export const getPokemonDetails = (id) =>{
    return async function (dispatch) {
        try{
        let pokemon = await axios (`http://localhost:3001/pokemons/${id}`);
        return dispatch({
            type: "GET_POKEMON_DETAILS", 
            payload: pokemon.data});
    }catch(error){
        console.log(error)
    }
    };
};

export const getAllTypes = () =>{
    return async function (dispatch) {
        let types = await axios ("http://localhost:3001/types",{

        });
        return dispatch({type: "GET_ALL_TYPES", payload: types.data});
    };
};

export function postPokemon(payload){
    return async function(dispatch){
        const response = await axios.post("http://localhost:3001/pokemons", payload);
        return response;
    }
}

export function filterPokemonsByType(payload){
    return{
        type: "FILTER_BY_TYPE",
        payload
    }
}

export function filterCreated(payload){
    return{
        type: "FILTER_CREATED",
        payload
    }
}

export function orderByName (payload){
    return{
        type: "ORDER_BY_NAME",
        payload
    }
}

export function getPokemonName (name){
    return async function (dispatch){
        try{
            let pokeName = await axios("http://localhost:3001/pokemons?name=" + name);
            return dispatch({
                type: "GET_POKEMON_NAME",
                payload: pokeName.data
            })
        }catch(error){
            return new TypeError ("Pokemon not Found");
        }
    }
}

export function orderPokemonsStats (data, data2){
    return{
        type: "ORDER_POKEMONS_STATS",
        payload: data,
        payload2: data2
    }
}
export const emptyPokemon = (data)=>{
    return {
        type: "EMPTY_POKEMON",
        payload: data
    }
}



