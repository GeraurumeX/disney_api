const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');



class Movie extends Model {}

Movie.init({
    image: {
        type: DataTypes.STRING,
        allowNull: false, 
        validate: {
            notNull: {
                msg: "The image field can't be null"
            }
        }
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "The title field can't be null"
            }
        }
    },
    release: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
            notNull: {
                msg: "The title field can't be null"
            }
        }
    },
    average: {
        type: DataTypes.INTEGER,
        validate: {
            min: 1,
            max: 5
        }
    }
}, {
    sequelize,
    modelName: "movie",
    timestamps: false
});



module.exports = Movie;