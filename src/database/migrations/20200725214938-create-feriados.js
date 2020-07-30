"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("holidays", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      day_holiday: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      month_holiday: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      city_id: {
        type: Sequelize.INTEGER,
        references: { model: "cities", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        allowNull: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      fixed:{
        type: Sequelize.DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
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
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("holidays");
  },
};
