import Koa from 'koa'
import serve from 'koa-static'
import fs from 'fs'
import path from 'path'
import { API_PREFIX, STATIC_PUBLIC_PATH } from '../app.config'

const useStatic = (app: Koa) => {


  app.use(serve(STATIC_PUBLIC_PATH, {
    setHeaders: (res: { setHeader: (key: string, value: string) => void; }, path: string) => {
      console.log(path)
      // 默认情况下，Koa-static 会将文件缓存到内存中
      if (path.endsWith('.html') || path.endsWith('.json')) {
        // 对于 HTML 和 JSON 文件，禁用缓存
        res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate')
        res.setHeader('Pragma', 'no-cache')
        res.setHeader('Expires', '0')
      } else {
        // 对于其他文件，启用缓存
        res.setHeader('Cache-Control', 'public, max-age=2592000, immutable')
      }
    }
  }))

  app.use(async (context, next) => {
    if (!context.url.startsWith(API_PREFIX)) {
      context.status = 200
      context.type = 'html'
      context.body = fs.createReadStream(path.resolve(STATIC_PUBLIC_PATH, './index.html'))
    } else {
      await next()
    }
  })

}

export default useStatic
