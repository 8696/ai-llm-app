import instance from '../stores/db/instance'

import syncDbModel from '../stores/db/sync'

import { promptUserForCommand } from '../utils'

const start = async () => {
  await instance.connect()
  await syncDbModel.sync()
}

promptUserForCommand('继续同步？').then(result => {
  result && start().catch(console.error)
}).catch(console.error)


