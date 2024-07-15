import { useKoaServer } from 'routing-controllers'
import Koa from 'koa'
import { ApiErrorMiddleware } from '../middlewares'
import { API_PREFIX } from '../app.config'
const useControllers = (app: Koa) => {

  useKoaServer(app, {
    routePrefix: API_PREFIX,
    controllers: [`${__dirname  }/*.controller.*s`],
    middlewares: [ApiErrorMiddleware],
    defaultErrorHandler: false,
    cors: true
  })
}

export default useControllers
