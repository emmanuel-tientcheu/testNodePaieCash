const { user } = require("../db/sequelize");
const { ValidationError } = require("sequelize");

module.exports = (app) => {
  app.post("/api/users", (req, res) => {
    user
      .create(req.body)
      .then((user) => {
        const message = "l'utilisateur a bien ete creer";
        res.status(200).json({ message, data: user });
      })
      .catch((err) => {
        if (err instanceof ValidationError) {
          res.status(400).json({ message: err.message, data: err });
        } else {
            const message = "l'utilisateur na pas pu etre creer";
            res.status(400).json({ message, data: err});
        }
      });
  });
};
