const { user } = require("../db/sequelize");

module.exports = (app) => {
    app.get('/api/users' ,(req, res) => {
        user.findAll()
        .then(users => {
            const message = "liste des utilisateur";
            res.status(200).json({message, data:users});
        }).catch(err => {
            const message = "la liste des users indisponible"
            res.status(500).json({message, data: err})
        })
    })
}