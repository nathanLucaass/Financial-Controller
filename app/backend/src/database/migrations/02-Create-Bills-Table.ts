import { type Model, type QueryInterface, DataTypes } from 'sequelize'
import type IBill from '../../Interfaces/IBill'

export default {
  async up (queryInterface: QueryInterface) {
    await queryInterface.createTable<Model<IBill>>('bills', {
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
    })
  },

  async down (queryInterface: QueryInterface) {
    await queryInterface.dropTable('bills')
  }
}
