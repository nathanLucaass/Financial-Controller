import {
  DataTypes,
  Model,
  type InferAttributes,
  type InferCreationAttributes,
  type CreationOptional
} from 'sequelize'
import db from '.'

export default class Bill extends Model<InferAttributes<Bill>, InferCreationAttributes<Bill>> {
  declare id: CreationOptional<number>
  declare date: Date
  declare description: string
  declare value: number
  declare user_id: number
}

Bill.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  date: {
    allowNull: false,
    type: DataTypes.STRING
  },
  description: {
    allowNull: false,
    type: DataTypes.STRING
  },
  value: {
    allowNull: false,
    type: DataTypes.FLOAT
  },
  user_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: 'users',
      key: 'id'
    }
  }
}, {
  sequelize: db,
  tableName: 'bills',
  timestamps: false
})
