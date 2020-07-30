"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.addColumn("holidays", "state_id", {
      type: Sequelize.INTEGER,
      references: { model: "states", key: "id" },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
      allowNull: true,
    });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.removeColumn("holidays", "state_id");
  },
};
