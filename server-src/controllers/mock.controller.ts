import { Controller, Get } from 'routing-controllers'
import { responseService } from '../service'
import { UserDbModel } from '../stores/db/model/index'
import { v4 as uuidV4 } from 'uuid'
import { mockUserName } from '../utils'

@Controller('/mock')
export class UserController {
  @Get('/save')
  protected async createUser() {

    for (let i = 0; i < 100; i++) {
      const username = mockUserName()
      await new UserDbModel({
        user_id: uuidV4().toString(),
        username,
        email: `${username}@gmail.com`,
        age: i + 10,
        gender: i % 2,
        phone: `134000000${i}`,
        password: uuidV4().toString(),
        address: '南山区',
        city: '深圳',
        country: '中国',
        zip_code: '518000',
        last_login: new Date(),
        status: 1,
        profile_picture: 'https://avatars.githubusercontent.com/u/1053429?v=4',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista patris',
        date_of_birth: new Date()
      }).save()
    }

    return responseService.success()
  }

}
