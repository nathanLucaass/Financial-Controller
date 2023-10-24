import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.'

export default class Earning extends Model<InferAttributes<Earning>, InferCreationAttributes<Earning>> {
  declare id: CreationOptional<number>;
  declare date: Date;
  declare description: string;
  declare value: number;
  declare user_id: number;
}

Earning.init({
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
  },
  user_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: 'users',
      key: 'id',
    }
  },
}, {
  sequelize: db,
  tableName: 'earnings',
  timestamps: false,
});
