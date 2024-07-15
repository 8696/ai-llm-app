import { Controller, Get, HttpError } from 'routing-controllers'
import { responseService } from '../service'

import http from 'http'

@Controller('/http')
export class RedisController {

  @Get('/200')
  async s200() {
    return responseService.success({ date: new Date().toString() })
  }

  @Get('/500')
  async s500() {
    throw new HttpError(500, 'Internal Server Error')
  }

  @Get('/405')
  async s405() {
    throw new HttpError(405, http.STATUS_CODES['405'])
  }

  @Get('/502')
  async s502() {
    throw new HttpError(502, http.STATUS_CODES['502'])
  }

  @Get('/code-error')
  async sCodeError() {
    return responseService.error('用户不存在')
  }
}
