const { Sequelize, DataTypes } = require("sequelize");
const userModel = require("../models/user");

const sequelizeDb = new Sequelize("paiecashtest", "root", "", {
  host: "localhost",
  dialect: "mariadb",
  dialectOptions: {
    timezone: "Etc/GMT-2",
  },
  loggin: false,
});

const iniDb = () => {
  sequelizeDb
    .authenticate()
    .then((_) => console.log("authenticated successfully"))
    .catch((err) => console.error("error " + err));
};

const user = userModel(sequelizeDb, DataTypes);

//pour empecher la reactualisation de la base de donnée
sequelizeDb
  .sync({ force: false })
  .then((_) => console.log("sync successfully"));

module.exports = { user, iniDb };
