import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import { router } from "./routes";

import "./database";

// @types/express
const app = express();

app.use(express.json());

app.use(router);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if(err instanceof Error){
        return response.status(400).json({
            error: err.message
        })
    }

    return response.status(500).json({
        status: "error",
        message: "Internal Server Error"
    })
})

app.listen(3000, () => console.log("Server is running"));


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