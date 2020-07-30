require('dotenv').config();

module.exports = {
  dialect: "postgres",
  host: process.env.DBHOST,
  username: process.env.DBUSER,
  password: process.env.DBPASS,
  database: process.env.DBNAME,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
