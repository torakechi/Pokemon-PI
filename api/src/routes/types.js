const axios = require("axios");
const {Router} = require ("express");
const router = Router();
const {pokeSearch, getPokemonApi, pokeList, getPokeTypesApi,listTypes} = require("../middlewares/pokeModel");
const {Type} = require("../db.js");

router.get("/", async (req,res)=>{
    try{
        let types = await listTypes();
        
        for(e of types) {
            const findType = await Type.findOne({where: {name: e}});
            if(findType) return res.json(await Type.findAll());
            await Type.create({name: e});
        }
        res.status(200).json(await Type.findAll());
    }catch(error){
        return res.status(404).json(error.message);
    };
});


module.exports = router;
