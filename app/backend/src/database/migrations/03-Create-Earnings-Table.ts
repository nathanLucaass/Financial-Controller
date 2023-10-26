import { DataTypes } from 'sequelize'
import type { QueryInterface } from 'sequelize'

export default {
  async up (queryInterface: QueryInterface) {
    await queryInterface.createTable('earnings', {
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
    await queryInterface.dropTable('earnings')
  }
}
