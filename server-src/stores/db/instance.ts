import { Sequelize } from 'sequelize'
import path from 'path'
import logService from '../../service/log.service'

class Instance {
  private readonly instance: Sequelize
  constructor() {
    this.instance = new Sequelize({
      dialect: 'sqlite',
      storage: path.join(__dirname, './database.sqlite'),
      define: {
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci'
      },
      logging: (sql) => {
        logService.mark(sql)
      }
    })
  }

  async connect() {
    return this.instance.authenticate()
  }

  getInstance() {
    return this.instance
  }
}
export default new Instance()
