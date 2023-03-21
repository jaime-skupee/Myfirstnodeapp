import { DataTypes } from 'sequelize'
import sequelize from '../config/database.js'

const Lecture = sequelize.define('Lecture', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false
    },
    poster: {
      type: DataTypes.STRING,
    },
    thumbnail: {
      type: DataTypes.STRING,
    },
    duration: {
      type: DataTypes.INTEGER,
    }
  }, 
  {
    sequelize: sequelize,
  }
)

export default Lecture