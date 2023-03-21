import { DataTypes } from 'sequelize'
import sequelize from '../config/database.js'

const Module = sequelize.define('Module', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    courseId: {
      type: DataTypes.INTEGER
    },
    image: {
      type: DataTypes.STRING
    },
    //Has Teacher, no, has course
  }, 
  {
    timestamps: true,
    sequelize: sequelize,
  }
)

export default Module