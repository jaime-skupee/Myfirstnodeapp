import { DataTypes } from 'sequelize'
import sequelize from '../config/database.js'

const Clip = sequelize.define('Clip', {
    status: {
        type: DataTypes.SMALLINT
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    source: {
        type: DataTypes.TEXT
    },
    identifier: {
        type: DataTypes.TEXT
    },
    quality: {
        type: DataTypes.SMALLINT
    },
    flash: { 
        type: DataTypes.STRING
        //"https://decentravideos.com/uploads/movies/clip_127_1644884854_normal.mp4" 
    },
    html5_h264: { 
        type: DataTypes.STRING
        //"https://decentravideos.com/uploads/movies/clip_127_1644884854_normal.mp4" 
    },
    html5_webm: { 
        type: DataTypes.STRING
        //"https://decentravideos.com/uploads/movies/clip_127_1644884854_normal.webm" 
    },
    live_flash: {
        type: DataTypes.STRING
    },
    live_ios: {
        type: DataTypes.STRING
    },
    live_rtsp: {
        type: DataTypes.STRING
    },
    dash: {
        type: DataTypes.STRING
    },
    embed_flash: {
        type: DataTypes.STRING
    },
    embed_html5: {
        type: DataTypes.STRING
    },
    // "vod_flash_trailer": "",
    // "vod_html5_h264_trailer": "",
    // "vod_html5_webm_trailer": "",
    quality_label: {
        type: DataTypes.STRING
        //"Normal"
    }
})

export default Clip
