import sequelize from '../config/database.js'
import models from '../models/index.js'

export default async (request, response, next) => {try {
    await sequelize.authenticate();
    await sequelize.sync({force: true})
    console.log('Connection has been established successfully.')
} catch (error) {
    console.error('Unable to connect to the database:', error)
    throw { error_code: 512, message: "Unable to connect to the database", error }
}
    next()
}