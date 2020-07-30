import Sequelize from "sequelize";
import dbConfig from "../config/database";

import City from "../models/City";
import State from "../models/State";
import HolidayMobile from "../models/HolidayMobile";
import Holiday from "../models/Holiday";

const models = [City, State, HolidayMobile, Holiday];

class Database {
  constructor() {
    this.connection = new Sequelize(dbConfig);

    this.init();
  }

  init() {
    models
      .map((m) => m.init(this.connection))
      .map((m) => m.associate && m.associate(this.connection.models));
  }
}

export default new Database();
