const express = require('express');

const Character = require('../database/models/Character');
const Movie = require('../database/models/Movie');
const Genre = require('../database/models/Genre');

const router = express.Router();


// Movie list     /api_disney/movies
router.get('/', (req, res) => {
    Movie.findAll({
        attributes: ['image', 'title', 'release']
    }).then(movies => {
        res.json(movies);
    }).catch(err => {
        res.json(err);
    })
})

// CRUD
// Create Movie  /api_disney/movies
router.post('/', (req, res) => {
    Movie.create({
        image: req.body.image,
        title: req.body.title,
        release: req.body.release,
        average: req.body.average
    }).then(movie => {
        res.json(movie);
    }).catch(err => {
        res.json(err);
    })
});



// Update Movie  /api_disney/movies/:id
router.patch('/:id', (req, res) => {
    Movie.update({
        image: req.body.image,
        title: req.body.title,
        release: req.body.release,
        average: req.body.average
    }, {
        where: {
            id: req.params.id
        }
    }).then(result => {
        res.json(result);
    }).catch(ee => {
        res.json(err);
    })
});


// DELETE Movie /api_disney/movie/:id
router.delete('/:id', (req, res) => {
    Movie.destroy({
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