module.exports = (sequelize, DataTypes) => {
  return sequelize.define("users", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: { msg: "l'email n'est pas correcte" },
        notNull: { msg: "l'email n'Est pas facultatif" },
      },
    },
    nom: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "le nom est obligatoire" },
        notNull: { msg: "l'email n'Est pas facultatif" },
      },
    },
  });
};
