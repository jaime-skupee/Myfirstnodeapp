import { Sequelize } from 'sequelize'

const sequelize = new Sequelize('postgres://postgres:@localhost:5432/vod')
// const sequelize = new Sequelize('postgresql://decentra:2vMAVH0kxRkos5vkSCrp9Q@doting-climber-2202.g8z.cockroachlabs.cloud:26257/VOD?sslmode=verify-full')

export default sequelize