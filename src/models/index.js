// load all the models
const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const config = require("../config.js");

const db = {};
const sequelize = new Sequelize(
  config[process.env.NODE_ENV].database,
  config[process.env.NODE_ENV].username,
  config[process.env.NODE_ENV].password,
  config[process.env.NODE_ENV]
);

fs.readdirSync(__dirname)
  .filter((file) => file !== "index.js")
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
