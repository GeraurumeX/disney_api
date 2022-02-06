const Character = require('./models/Character');
const Genre = require('./models/Genre');
const Movie = require('./models/Movie');

// Relacion uno a muchos (un genero para muchas peliculas)
Genre.hasMany(Movie, { foreignKey: "genreId" });
Movie.belongsTo(Genre, {as: "genre"});





// Table character_movie
Movie.belongsToMany(Character, { through: "character_movie" });
Character.belongsToMany(Movie, { through: "character_movie" });