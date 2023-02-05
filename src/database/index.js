import Sequelize from "sequelize";
import configDatabase from "../config/config";
import User from "../models/user"; //estamos chamndo ele, pois ele que iremos conectar


//iremos criar uma class com o nome DataBase

const models = [User]; //estamos cirando uma arrei, pos futuramente, iremos ter varios models, que poderemos colocar dentro dela...

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(configDatabase); //aqui ele pede a configuração inicial do banco
    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associante && model.associante(this.connection.models)
      );
  }


}

export default new Database();
