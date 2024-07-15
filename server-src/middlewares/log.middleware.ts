import { Middleware, KoaMiddlewareInterface } from 'routing-controllers'
import { Context } from 'koa'

@Middleware({ type: 'before' })
export default class LogMiddleware implements KoaMiddlewareInterface {
  async use(context: Context, next: () => Promise<void>): Promise<void> {
    console.log(`${context.method} ${context.url}`)
    await next()
  }
}
