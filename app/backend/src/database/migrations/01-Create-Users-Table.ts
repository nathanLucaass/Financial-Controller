import { type Model, type QueryInterface, DataTypes } from 'sequelize'
import type IUser from '../../Interfaces/IUser'

export default {
  async up (queryInterface: QueryInterface) {
    await queryInterface.createTable<Model<IUser>>('users', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      username: {
        allowNull: false,
        type: DataTypes.STRING
      },
      email: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING
      }
    })
  },

  async down (queryInterface: QueryInterface) {
    await queryInterface.dropTable('users')
  }
}
