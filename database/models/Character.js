const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');



class Character extends Model {}

Character.init({
    image: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "The image field can't be null"
            }
        }
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "The name field can't be null"
            }
        }
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull:false,
        validate: {
            notNull: {
                msg: "The age field can't be null"
            }
        }
    },
    weight: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: {
                msg: "The weight field can't be null"
            }
        }
    },
    life_story: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notNull: {
                msg: "The life_story field can't be null"
            }
        }
    }
}, {
    sequelize,
    modelName: "character",
    timestamps: false
});



module.exports = Character;