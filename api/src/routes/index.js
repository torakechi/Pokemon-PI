const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

const pokeRoutes = require("./pokemons.js");
router.use("/pokemons", pokeRoutes); // a todas las rutas que sean /pokemons las redirije a pokeroutes del pokemon.js

const pokeTypes = require("./types.js");
router.use("/types", pokeTypes);// a todas las rutas que sean /type las redirije a poketypes del types.js

module.exports = router;
