import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.'

export default class Bill extends Model<InferAttributes<Bill>, InferCreationAttributes<Bill>> {
  declare id: CreationOptional<number>;
  declare date: Date;
  declare description: string;
  declare value: number;
}

Bill.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  date: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  description: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  value: {
    allowNull: false,
    type: DataTypes.FLOAT,
  }
}, {
  sequelize: db,
  tableName: 'bills',
  timestamps: false,
});
