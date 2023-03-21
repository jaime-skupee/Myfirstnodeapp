import { DataTypes } from 'sequelize'
import sequelize from '../config/database.js'

const User = sequelize.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: true
    },
    username: {
        type: DataTypes.STRING,
        unique: true
    },
    email: {
        type: DataTypes.STRING
    },
    country: {
        type: DataTypes.STRING
    },
    state: {
        type: DataTypes.STRING
    },
    phoneNumber: {
        type: DataTypes.STRING
    },
    rememberToken: {
        type: DataTypes.STRING
    },
    lastLogin: {
        type: DataTypes.DATE
    },
    photo: {
        type: DataTypes.STRING
    },
    address: {
        type: DataTypes.STRING
    },
    status: {
        type: DataTypes.SMALLINT,
        defaultValue: 0
    },
    password: {
        type: DataTypes.STRING,
        // allowNull: true,
        // set(value) {
        //     this.setDataValue('password', bcryptjs.hashSync(value, 10))
        // },
        // get() {
        //     return this.getDataValue('password')
        // }
    }
},
    {
        scopes: {
            withoutPassword: {
                attributes: {
                    exclude: ['password']
                }
            }
        }
    })

export default User