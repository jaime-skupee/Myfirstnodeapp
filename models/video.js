import { DataTypes } from 'sequelize'
// const sequelize = new Sequelize('sqlite::memory:');
import sequelize from '../config/database.js'

const Video = sequelize.define('Video', {
    author: {
        type: DataTypes.STRING
    },
    status: {
        type: DataTypes.SMALLINT,
        defaultValue: 0
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    type: {
        type: DataTypes.SMALLINT,
        defaultValue: 0
    },
    slug: {
        type: DataTypes.STRING
    },
    aspect: {
        type: DataTypes.STRING
    },
    duration: {
        type: DataTypes.SMALLINT,
        defaultValue: 0
    },
    description: {
        type: DataTypes.TEXT
    },
    abstract: {
        type: DataTypes.TEXT
    },
    tags: {
        type: DataTypes.TEXT
    },
    images: {
        type: DataTypes.STRING
    },
    sprite: {
        type: DataTypes.STRING
    },
    is360: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    is3d: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    source: {
        type: DataTypes.STRING
    },
    isVisible: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    banner: {
        type: DataTypes.STRING
    },
    media: {
        type: DataTypes.INTEGER //fdsnfkjdsnfjksndjknnfds
    },

}, {
    // Other model options go here
})

export default Video
