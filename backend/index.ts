import { Hono } from 'hono'

const app = new Hono()

export default {
  fetch: app.fetch,
}

app.basePath('/api').all('/', (ctx) => {
  return ctx.json({
    message: 'Hello from Hono!',
  })
})
