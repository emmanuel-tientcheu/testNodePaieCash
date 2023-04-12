const { user } = require("../db/sequelize");

module.exports = (app) => {
    app.delete("/api/users/:id", (req, res) => {
        user.findByPk(req.params.id)
        .then(user => {
            const userDelete = user;
            return user.destroy({
                where: {id: user.id}
            })
            .then(() => {
                const message = "user delete sucessfully";
                res.status(200).json({message, data:userDelete})
            })
        }).catch(err => {
            const message = "l'utilisateur n'a pas pu etre supprimer"
            res.status(500).json({message, data: err})
        })
    } )
}