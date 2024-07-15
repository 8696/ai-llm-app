import { Model, DataTypes } from 'sequelize'
import db from '../instance'

class M extends Model<{
  username: string
  age: string
}> {
}

M.init(
  {
    username: DataTypes.STRING(32),
    age: DataTypes.STRING(32)
  },
  {
    tableName: 'users',
    sequelize: db.getInstance(),
    updatedAt: false,
    createdAt: false
  }
)

export default M

