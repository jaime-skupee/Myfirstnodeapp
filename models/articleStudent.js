import { DataTypes } from 'sequelize'
import sequelize from '../config/database.js'

const ArticleStudent = sequelize.define('ArticleStudent', {
    read: {
        type: DataTypes.BOOLEAN
    },
    like: {
        type: DataTypes.BOOLEAN
    }
  }, { timestamps: false });

  export default ArticleStudent