"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("holidays", [
      {
        day_holiday: 1,
        month_holiday: 1,
        name: "Ano Novo",
        fixed: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        day_holiday: 21,
        month_holiday: 4,
        name: "Tiradentes",
        fixed: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        day_holiday: 1,
        month_holiday: 5,
        name: "Dia do Trabalhador",
        fixed: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        day_holiday: 7,
        month_holiday: 9,
        name: "Independência",
        fixed: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        day_holiday: 12,
        month_holiday: 10,
        name: "Nossa Senhora Aparecida",
        fixed: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        day_holiday: 2,
        month_holiday: 11,
        name: "Finados",
        fixed: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        day_holiday: 15,
        month_holiday: 11,
        name: "Proclamação da República",
        fixed: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        day_holiday: 25,
        month_holiday: 12,
        name: "Natal",
        fixed: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("holidays", null, {});
  },
};
