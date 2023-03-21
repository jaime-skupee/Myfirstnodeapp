import { DataTypes } from 'sequelize'
import sequelize from '../config/database.js'

const Content = sequelize.define('Content', {
    language: {
      type: DataTypes.STRING,
      allowNull: false
    },
    code: {
      type: DataTypes.STRING
    },
    content: {
      type: DataTypes.TEXT
    },
    resume: {
      type: DataTypes.TEXT
    }
  }
)

export default Content