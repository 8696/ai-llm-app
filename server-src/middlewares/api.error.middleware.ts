import { Middleware, KoaMiddlewareInterface } from 'routing-controllers'
import { Context } from 'koa'
import http from 'http'
import { responseService } from '../service'
import logService from '../service/log.service'
import { generateErrorIns } from '../utils'
import { IS_FEATURE_PRODUCTION } from '../app.config'

@Middleware({ type: 'before' })
export default class ApiErrorMiddleware implements KoaMiddlewareInterface {
  async use(context: Context, next: () => Promise<void>): Promise<void> {
    try {
      await next()

      // 非 200 状态码
      const httpStatus = context.status.toString()
      if (!/^2\d{2}$/.test(httpStatus)) {
        throw new Error(http.STATUS_CODES[httpStatus] || 'Unknown error occurred.')
      }

    } catch (e: any) {
      context.status = 200
      // console.log(process.env);
      const error  = generateErrorIns(e)

      // 生产环境不输出错误具体信息
      const errorInfo = IS_FEATURE_PRODUCTION ? null : e

      // 生产环境只保留基本日志
      logService.error(context.path, error)

      context.body = responseService.error(error.message, errorInfo)
    }
  }
}
