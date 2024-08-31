import { Middleware, KoaMiddlewareInterface } from 'routing-controllers'
import { Context } from 'koa'
import { logService } from '../service/'

@Middleware({ type: 'before' })
export default class LogMiddleware implements KoaMiddlewareInterface {
  async use(context: Context, next: () => Promise<void>): Promise<void> {
    logService.info(`Request: ${context.method} ${context.url}`);
    await next()
  }
}
