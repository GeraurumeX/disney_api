const express = require('express');

const Character = require('../database/models/Character');
const Movie = require('../database/models/Movie');
const Genre = require('../database/models/Genre');

const router = express.Router();



// Character list    /api_disney/characters
router.get('/', (req, res) => {
    Character.findAll({
        attributes: ['image', 'name']
    }).then(characters => {
        res.json(characters);
    }).catch(err => {
        res.json(err);
    })
});

// Character by id     /api_disney/characters/:id
router.get('/:id', (req, res) => {
    Character.findByPk(req.params.id).then(character => {
        res.json(character);
    }).catch(err => {
        res.json(err);
    })
});


// CRUD
// Create Character  /api_disney/characters
//router.post('/', (req, res) => {
    //Character.create({
        //image: req.body.image,
        //name: req.body.name,
        //age: req.body.age,
        //weight: req.body.weight,
        //life_story: req.body.life_story
    //}).then(character => {
        //res.json(character);
    //}).catch(err => {
        //res.json(err);
    //})
//});

// Create Character include movie  /api_disney/movies
router.post('/', (req, res) => {
    Character.create({
        image_character: req.body.image_character,
        name: req.body.name,
        age: req.body.age,
        weight: req.body.weight,
        life_story: req.body.life_story
    }).then(movie => {
        Movie.create({
            image: req.body.image,
            title: req.body.title,
            release: req.body.release,
            average: req.body.average  
        }).then(character => {
            res.json(character);
        })
    }).catch(err => {
        res.json(err);
    })
});












// UPDATE Character  /api_disney/characters/:id
router.patch('/:id', (req, res) => {
    Character.update({
        image: req.body.image,
        name: req.body.name,
        age: req.body.age,
        weight: req.body.weight,
        life_story: req.body.life_story
    }, {
        where: {
            id: req.params.id
        }
    }).then(result => {
        res.json(result);
    }).catch(err => {
        res.json(err);
    })
});

// DELETE  Character  /api_disney/characters/:id
router.delete('/:id', (req, res) => {
    Character.destroy({
        where: {
            id: req.params.id
        }
    }).then(result => {
        res.json(result);
    }).catch(err => {
        res.json(err);
    })
});








module.exports = router;