import instance from '../stores/db/instance'

import syncDbModel from '../stores/db/sync'

import { promptUserForCommand } from '../utils'
import { FEATURE_ENV } from '../app.config'

const start = async () => {
  await instance.connect()
  await syncDbModel.sync()
}

promptUserForCommand(`当前环境为: **** ${FEATURE_ENV} **** 继续同步？`).then(result => {
  result && start().catch(console.error)
}).catch(console.error)


