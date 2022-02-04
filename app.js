const express = require('express');
const bodyParser = require('body-parser');
const { Sequelize } = require('sequelize');
const sequelize = require('./database/db');
require('./database/associations');



const app = express();

// settings
const PORT = process.env.PORT || 3000;

// middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Routes
app.get('/', function (req, res) {
    res.json("Disney API");
});


app.use('/api_disney/characters', require('./routes/characters'));
app.use('/api_disney/movies', require('./routes/movies'));
app.use('/api_disney/genre', require('./routes/genres'));






// server
app.listen(PORT, function () {
    console.log(`Server working on http://localhost:${PORT}`);



    // connect database
    sequelize.sync({ force: false }).then(() => {
        console.log("Database is OK");
    }).catch(error => {
        console.log("Database don't work", error);
    })
});


