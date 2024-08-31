import { Controller, Get } from 'routing-controllers'
import { responseService } from '../service'

@Controller('/proxy')
export class ProxyController {
  @Get('/test')
  protected async createUser() {

    return responseService.success()
  }

}
