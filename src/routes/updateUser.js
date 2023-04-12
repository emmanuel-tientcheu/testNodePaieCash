const { user } = require("../db/sequelize");
const { ValidationError } = require("sequelize");

module.exports = (app) => {
    app.put("/api/users/:id", (req, res )=> {
        const id = req.params.id;
        user.update(req.body, {
            where: {id: id},
        }).then(_ => {
            return user.findByPk(id)
            .then(user => {
                const message = "l'utilisateur a bien ete modifié";
                data = user;
                res.status(200).json({ message, data});
            })
        }).catch(err => {
            if(err instanceof ValidationError){
                res.status(400).json({message: err.message, data: err});
            }
            const message = "l'utilisateur n'a pas pu etre modifier"
            res.status(500).json({message, data: err})
        })
    } )
}