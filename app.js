const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');
const bodyParser = require('body-parser');

const sequelize = require('./src/db/sequelize.js');

sequelize.iniDb();

app.use(morgan('dev'));
app.use(bodyParser.json());

app.get('/', (req,res) => {
    res.json({
        description:"tout fonctionne normalement",
    })
})

require('./src/routes/createUser.js')(app);
require('./src/routes/fildAllUser.js')(app);
require('./src/routes/findUserByPk.js')(app);
require('./src/routes/updateUser.js')(app);
require('./src/routes/deleteUser.js')(app);



app.use(({res}) => {
    const message = "route introvable";
    res.status(400).json(message);
});



app.listen(port, () =>{console.log("listen port "+ port)})