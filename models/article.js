import { DataTypes } from 'sequelize'
import sequelize from '../config/database.js'

const Article = sequelize.define('Article', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    titleTranslations: {
      type: DataTypes.JSON
    },
    content: {
      type: DataTypes.TEXT
    },
    resume: {
      type: DataTypes.TEXT
    },
    slug: {
      type: DataTypes.STRING
    },
    difficulty: {
      type: DataTypes.SMALLINT,
    },
    time: {
      type: DataTypes.INTEGER,
    },
    image: {
      type: DataTypes.STRING,
    },
    likes: {
      type: DataTypes.INTEGER
    }
  }
)

export default Article