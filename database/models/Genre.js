const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');



class Genre extends Model {}

Genre.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "The name field can't be null"
            },
            isAlpha: {
                args: true,
                msg: "The name field can only contain characters"
            }
        }
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "The image field can't be null"
            }
        }
    }
}, {
    sequelize,
    modelName: "genre",
    timestamps: false
});



module.exports = Genre;