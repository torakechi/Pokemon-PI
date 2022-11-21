const axios = require("axios");
const {Router} = require ("express");
const router = Router();
const {pokeSearch, getPokemonApi, getPokeTypesApi,listTypes, getAll, pokeId} = require("../middlewares/pokeModel");
const {Pokemon, Type} = require("../db.js");


// /pokemons/:id

router.get("/:id", async (req, res)=>{
    const {id} = req.params;
    if(id){
    try{
        let pokemon = await pokeSearch(id);
        return res.json(pokemon);
    }catch(error){
        return res.status(404).json(error.message);
    }
}
});

// router.get('/:id', async (req,res) => {

//     const { id } = req.params
//     try {        
//         let allPokemon = await getAll()
//         let findPokemon = await allPokemon.find(e => e.id == id)
            
//         Object.keys(findPokemon).length ? 
//         res.status(200).json(findPokemon) :
//         res.status(404).send(`No existe ningun Pokemon con el id:${id}`)
//     } catch (error) {
//         console.log(error)
//     }
        
// })

// /pokemons?name
 
router.get("/", async (req, res, next)=>{
    const {name} = req.query;  
    if(name){                  
        try{
            let pokemon = await pokeSearch (name);
            console.log(pokemon)
            return res.json(pokemon);
        }catch(error){
            return res.status(404).json(error.message);
        }
    }
    next();
});

router.get("/", async (req,res)=>{
    
    try{
        const pokemons = await getAll();
        res.json(pokemons);
    }catch(error){
        return res.status(404).json(error.message);
    }
});

router.post("/", async (req,res)=>{
    let {name,sprite,hp,attack,defense,specialAttack,specialDefense,speed,height,weight,createdInDb,types} = req.body;

    let newPokemon = await Pokemon.create({
        name,
        sprite,
        hp,
        attack,
        defense,
        specialAttack,
        specialDefense,
        speed,
        height,
        weight,
        type1: types[0],
        type2: types[1],
        createdInDb
    });

    let typesDb = await Type.findAll({
        where: {name:types}
    })
    newPokemon.addType(typesDb);
    res.send("Successfully created pokemon")
});



module.exports = router;