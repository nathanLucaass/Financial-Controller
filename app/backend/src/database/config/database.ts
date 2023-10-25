/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { type Options } from 'sequelize'

const config: Options = {
  username: process.env.DB_USER ?? 'root',
  password: process.env.DB_PASS ?? '123456',
  database: 'FINANCIAL_CONTROLLER',
  host: process.env.DB_HOST ?? 'localhost',
  port: Number(process.env.DB_PORT) ?? 3306,
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Z'
  },
  logging: false
}

export = config
