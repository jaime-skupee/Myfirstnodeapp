import { DataTypes } from 'sequelize'
import sequelize from '../config/database.js'

const Course = sequelize.define('Course', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
    },
    slug: {
      type: DataTypes.STRING,
    },
    banner: {
      type: DataTypes.STRING,
    },
    thumbnail: {
      type: DataTypes.STRING,
    },
    rate: {
      type: DataTypes.DOUBLE,
    },
    time: {
      type: DataTypes.INTEGER,
    },
    isFeatured: {
      type: DataTypes.SMALLINT
    },
    type: {
      type: DataTypes.INTEGER,
    },
    isPaidContent: {
      type: DataTypes.INTEGER,
    }
    // Has teacher
  }, 
  {
    sequelize: sequelize,
  }
)

export default Course