"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("holidays", "city_id");

    await queryInterface.addColumn("holidays", "city_id", {
      type: Sequelize.INTEGER,
      allowNull: true,
    });

    await queryInterface.dropTable("cities");
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("cities", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      ibge_code: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });

    await queryInterface.removeColumn("holidays", "city_id");

    await queryInterface.addColumn("holidays", "city_id", {
      type: Sequelize.INTEGER,
      references: { model: "cities", key: "id" },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
      allowNull: true,
    });
  },
};
