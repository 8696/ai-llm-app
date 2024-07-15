
import { SyncOptions } from 'sequelize'

import { UserDbModel } from './model'

export default {
  async sync() {
    const syncOptions: SyncOptions = {
      alter: true
    }
    await UserDbModel.sync(syncOptions)
  }
}
