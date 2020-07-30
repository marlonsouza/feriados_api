"use strict";

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert("states", [
      {
        ibge_code: 12,
        initials: "AC",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        ibge_code: 27,
        initials: "AL",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        ibge_code: 16,
        initials: "AP",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        ibge_code: 13,
        initials: "AM",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        ibge_code: 29,
        initials: "BA",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        ibge_code: 23,
        initials: "CE",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        ibge_code: 53,
        initials: "DF",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        ibge_code: 32,
        initials: "ES",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        ibge_code: 52,
        initials: "GO",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        ibge_code: 21,
        initials: "MA",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        ibge_code: 51,
        initials: "MT",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        ibge_code: 50,
        initials: "MS",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        ibge_code: 31,
        initials: "MG",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        ibge_code: 15,
        initials: "PA",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        ibge_code: 25,
        initials: "PB",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        ibge_code: 41,
        initials: "PR",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        ibge_code: 26,
        initials: "PE",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        ibge_code: 22,
        initials: "PI",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        ibge_code: 33,
        initials: "RJ",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        ibge_code: 24,
        initials: "RN",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        ibge_code: 43,
        initials: "RS",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        ibge_code: 11,
        initials: "RO",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        ibge_code: 14,
        initials: "RR",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        ibge_code: 42,
        initials: "SC",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        ibge_code: 35,
        initials: "SP",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        ibge_code: 28,
        initials: "SE",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        ibge_code: 17,
        initials: "TO",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("states", null, {});
  },
};
