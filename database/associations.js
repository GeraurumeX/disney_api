const Character = require('./models/Character');
const Genre = require('./models/Genre');
const Movie = require('./models/Movie');


// Table character_movie
Character.belongsToMany(Movie, { through: "character_movie" });
Movie.belongsToMany(Character, { through: "character_movie" });