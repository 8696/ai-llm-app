
import { SyncOptions } from 'sequelize'

import { UserDbModel, OrderModel, ProductModel, RatingModel } from './model'

export default {
  async sync() {
    const syncOptions: SyncOptions = {
      alter: true
    }
    await UserDbModel.sync(syncOptions)
    await OrderModel.sync(syncOptions)
    await ProductModel.sync(syncOptions)
    await RatingModel.sync(syncOptions)
  }
}
