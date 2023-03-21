import { DataTypes } from 'sequelize'
import sequelize from '../config/database.js'

const Category = sequelize.define('Category', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    slug: {
        type: DataTypes.STRING,
        allowNull: false
    },
    parent: {
        type: DataTypes.INTEGER
    },
    image: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.TEXT
    },
    status: {
        type: DataTypes.SMALLINT,
        defaultValue: 0
    }
})

export default Category
