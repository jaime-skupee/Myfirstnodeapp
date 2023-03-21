import { DataTypes } from 'sequelize'
import sequelize from '../config/database.js'

const Student = sequelize.define('Student', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_name: {
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
    license: {
        type: DataTypes.STRING
    },
    rank: {
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
    nextRenewal: {
        type: DataTypes.STRING
    },
    google_2fa_confirmed: {
        type: DataTypes.BOOLEAN
    },
    google_2fa: {
        type: DataTypes.STRING
    },
    rememberToken: {
        type: DataTypes.STRING
    },
    emailVerifiedAt: {
        type: DataTypes.STRING
    },
    lastLogin: {
        type: DataTypes.STRING
    },
    newsletter: {
        type: DataTypes.BOOLEAN
    },
    courseCount: {
        type: DataTypes.INTEGER
    },
    signInCount: {
        type: DataTypes.INTEGER
    },
    profilePhoto: {
        type: DataTypes.STRING
    },
    zipCode: {
        type: DataTypes.STRING
    },
    addressLine1: {
        type: DataTypes.STRING
    },
    addressLine2: {
        type: DataTypes.STRING
    },
    subscriptionId: {
        type: DataTypes.INTEGER
    },
    // password: {
    //   type: DataTypes.STRING,
    //   allowNull: true,
    //   set( value ) {
    //     this.setDataValue('password', bcryptjs.hashSync(value, 10))
    //   },
    //   get() {
    //     return this.getDataValue('password')
    //   }
    // }
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, 
  {
    sequelize: sequelize,
    scopes: {
      withoutPassword: {
        attributes: {
          exclude: ['password']
        }
      }
    }
})

export default Student