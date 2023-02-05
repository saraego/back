import express from "express"

import UsersController from "../controllers/UsersController"

const route = express.Router()

//rotas cadastro e login
route.post('/create',UsersController.store)



//ProdutoController


export default route