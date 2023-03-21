import { DataTypes } from 'sequelize'
import sequelize from '../config/database.js'

const Channel = sequelize.define('Channel', {
    author: {
        type: DataTypes.STRING
    },
    status: {
        type: DataTypes.SMALLINT
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    slug: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.TEXT
    },
    image: {
        type: DataTypes.TEXT
    }
})

export default Channel
