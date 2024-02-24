import { env } from './env'
import { app } from './app'

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log(`🥶 Server listening on ${env.PORT}`)
  })
  .catch(() => {
    console.log('Erro when listening')
  })
