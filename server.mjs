// server.mjs

import express from 'express'
import { obtenerSuperheroePorIdController, obtenerSuperheroesMayoresDe30Controller, buscarSuperheroesPorAtributoController } from './controllers/superheroesController.mjs'

const app= express()

// El Servidor se ejecutará en el puerto 3005
const PORT=3005

// Peticiones GET //
// Recibe un ID de superheroe y devuelve los datos de ese superheoe o un mensaje si no fue encontrado.
app.get('/superheroes/id/:id', obtenerSuperheroePorIdController)

// Recibe un atributo (por ejemplo, nombre o poder) y devuelve una lista de superheoes que cumplen con ese criterio
app.get('/superheroes/atributo/:atributo/:valor', buscarSuperheroesPorAtributoController)

// Devuelve una lista de superheroes mayores de 30 anos que ademas sean del planeta Tierra y tengan al menos 2 poderes.
app.get('/superheroes/edad/mayorA30', obtenerSuperheroesMayoresDe30Controller)

// Levantar el servidor en el puerto 3005
app.listen(PORT, ()=>{
    console.log(`El servidor esta corriendo en http://localhost:${PORT}`);
})
