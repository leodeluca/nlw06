import "reflect-metadata";
import express, { request, response } from "express";
import { router } from "./routes";

import "./database";

// @types/express
const app = express();

app.use(express.json());

app.use(router);

// GET => Buscar Informação
// POST => Inserir (Criar) uma informação
// PUT => ALterar uma informação
// DELETE => Remover um dado
// PATCH => ALterar uma informação específica

/**
 * Routes Params => http://localhost:3000/produtos/987654321
 * Query Params => http://localhost:3000/produtos?name=teclado&description=tecladobom&
 * Body Params => {
 * "name": "teclado",
 * "description": "teclado bom"
 * }
 */

// app.get("/test", (request, response) => {
//     return response.send("Olá NLW");
// });

// app.post("/test-post", (request, response) => {
//     return response.send("Olá NLW POST");
// })

//http://localhost:3000
app.listen(3000, () => console.log("Server is running"));