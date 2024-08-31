import { Sequelize } from 'sequelize'
// import path from 'path'
import logService from '../../service/log.service'
import { DATABASE } from '../../app.config'

class Instance {
  private readonly instance: Sequelize
  constructor() {
    this.instance = new Sequelize({
      // 选择 sqlite
      // dialect: 'sqlite',
      // storage: path.join(__dirname, './database.sqlite'),

      // 选择 mysql
      dialect: 'mysql',
      username: DATABASE.username,
      password: DATABASE.password,
      database: DATABASE.database,
      port: DATABASE.port,
      host: DATABASE.host,
      timezone: '+08:00',

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
