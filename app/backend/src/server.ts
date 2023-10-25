/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import App from './app'

const PORT = process.env.PORT ?? 3001

new App().start(PORT)
