const { user } = require("../db/sequelize");

module.exports = (app) => {
    app.get("/api/users/:id", (req, res) => {
        user.findByPk(req.params.id)
        .then(user => {
            if(user === null) {
                return res.status(404).json({message:"l'utilisateur n'existe pas"})
            }
            const message = "utilisateur recuperer";
            res.json({message, data: user})
        }).catch(err => {
            const message = "utilisateur indisponible"
            res.status(500).json({message, data: err})
        });
    })
}