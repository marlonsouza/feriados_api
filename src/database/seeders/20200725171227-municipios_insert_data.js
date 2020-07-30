"use strict";

const path = require("path");
const csv = require("csv-load-sync");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const municipiosPath = path.resolve(
      __dirname,
      "..",
      "assets",
      "municipios-2019.csv"
    );

    const municipiosCsv = csv(municipiosPath);

    await queryInterface.bulkInsert(
      "cities",
      municipiosCsv.map((r) => {
        return {
          ibge_code: r.codigo_ibge,
          name: r.nome,
          created_at: new Date(),
          updated_at: new Date()
        };
      })
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("cities", null, {});
  },
};
