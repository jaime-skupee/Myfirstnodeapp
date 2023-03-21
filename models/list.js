import { DataTypes } from 'sequelize'
import sequelize from '../config/database.js'

const List = sequelize.define('List', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    order: {
        type: DataTypes.SMALLINT,
        defaultValue: 0
    },
    status: {
        type: DataTypes.SMALLINT,
        defaultValue: 0
    }
})

export default List
