const axios = require("axios");


const {Pokemon, Type} = require ("../db");
let pokeTypesObj = [];
const getPokemonApi = async () =>{
let pokemonsObj = [];

let pokemons = await axios ('https://pokeapi.co/api/v2/pokemon?limit=40'); // obtenemos datos



let urls = pokemons.data.results.map((pokemon) => {
    return pokemon.url;
  });
  


let pokemon;

for(let i = 0; i<urls.length; i++){
    let url = await axios(urls[i]);
    

    let info = url.data;
    pokemon = {
            id : info.id,
            name : info.name,
            sprite : info.sprites.other.home.front_default,
            hp: info.stats[0].base_stat,
            attack: info.stats[1].base_stat,
            defense: info.stats[2].base_stat,
            specialAttack: info.stats[3].base_stat,
            specialDefense:info.stats[4].base_stat,
            speed: info.stats[5].base_stat,
            height: info.height*10,
            weight: info.weight,
            type: info.types.map(e=> e.type.name)
    };
    
    pokemonsObj.push(pokemon);
}
return pokemonsObj;
};


const pokeSearch = async (name) => {
    try{
        let search = await axios (`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)
        let infoPokemon = [{
            id : search.data.id,
            name : search.data.name,
            sprite : search.data.sprites.other.home.front_default,
            hp: search.data.stats[0].base_stat,
            attack: search.data.stats[1].base_stat,
            defense: search.data.stats[2].base_stat,
            specialAttack: search.data.stats[3].base_stat,
            specialDefense:search.data.stats[4].base_stat,
            speed: search.data.stats[5].base_stat,
            height: search.data.height*10,
            weight: search.data.weight,
            type: search.data.types.map(e=> e.type.name)
    }];
    return infoPokemon;

    }catch(error){
        return new TypeError ("No se encontro el Pokemon");
    }
};

const pokeId = async (id) => {
    try{
        let search = await axios (`https://pokeapi.co/api/v2/pokemon/${id}`)
        
        let infoPokemon = {
            id : search.data.id,
            name : search.data.name,
            sprite : search.data.sprites.other.home.front_default,
            hp: search.data.stats[0].base_stat,
            attack: search.data.stats[1].base_stat,
            defense: search.data.stats[2].base_stat,
            specialAttack: search.data.stats[3].base_stat,
            specialDefense:search.data.stats[4].base_stat,
            speed: search.data.stats[5].base_stat,
            height: search.data.height*10,
            weight: search.data.weight,
            type: search.data.types.map(e=> e.type.name)
    };
    return infoPokemon;

    }catch(error){
        return new TypeError ("No se encontro el Pokemon");
    }
};

const getPokeTypesApi = async () =>{
    let types = await axios ('https://pokeapi.co/api/v2/type'); // obtenemos los datos

    let urls = types.data.results.map((type)=>{
        return type.name;
    });
    return urls;
};

const listTypes = async () =>{
    return pokeTypesObj.length ? pokeTypesObj : getPokeTypesApi();
}

const getPokemonDb = async () =>{
      let pokemonDb = await Pokemon.findAll({
        include:{
            model: Type,
            attibutes: ["name"],
            through: {
                attributes: [],
            }

        }, raw:true
})
   pokemonDb = pokemonDb.map(e =>{
    return {
        id : e.id,
        name : e.name,
        sprite : e.sprite,
        hp: e.hp,
        attack: e.attack,
        defense: e.defense,
        specialAttack: e.specialAttack,
        specialDefense:e.specialDefense,
        speed: e.speed,
        height: e.height,
        weight: e.weight,
        type: [e.type1, e.type2],
        createdInDb: true,
    }
   }) 
   return pokemonDb;
}

const getAll = async () =>{
    const apiData = await getPokemonApi();
    const dbData = await getPokemonDb();
    const totalData = [...apiData, ...dbData];
    return totalData;
}

module.exports = {
    getPokemonApi,
    pokeSearch,
    getPokeTypesApi,
    listTypes,
    pokeId,
    getPokemonDb,
    getAll
}