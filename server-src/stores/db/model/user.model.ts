import { Model, DataTypes } from 'sequelize'
import db from '../instance'

class User extends Model<{
  user_id: string,
  username: string,
  age: number,
  gender: number,
  phone: string,
  email: string,
  password: string,
  address: string,
  city: string,
  country: string,
  zip_code: string,
  last_login: Date,
  status: number,
  profile_picture: string,
  bio: string,
  date_of_birth: Date,
}> {}

User.init(
  {
    user_id: {
      type: DataTypes.STRING(36),
      comment: '用户 ID',
      primaryKey: true,
      allowNull: false,
      defaultValue: ''
    },
    username: {
      type: DataTypes.STRING(32),
      comment: '用户名',
      allowNull: false,
      defaultValue: ''
    },
    age: {
      type: DataTypes.INTEGER,
      comment: '年龄',
      allowNull: false,
      defaultValue: 0
    },
    gender: {
      type: DataTypes.TINYINT,
      comment: '性别：0-女，1-男',
      allowNull: false,
      defaultValue: 0
    },
    phone: {
      type: DataTypes.STRING(11),
      comment: '手机号',
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(100),
      comment: '电子邮件',
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING(128),
      comment: '密码',
      allowNull: false
    },
    address: {
      type: DataTypes.STRING(255),
      comment: '地址',
      allowNull: true
    },
    city: {
      type: DataTypes.STRING(100),
      comment: '城市',
      allowNull: true
    },
    country: {
      type: DataTypes.STRING(100),
      comment: '国家',
      allowNull: true
    },
    zip_code: {
      type: DataTypes.STRING(10),
      comment: '邮政编码',
      allowNull: true
    },
    last_login: {
      type: DataTypes.DATE,
      comment: '最后登录时间',
      allowNull: true
    },
    status: {
      type: DataTypes.TINYINT,
      comment: '账户状态：0-禁用，1-启用',
      allowNull: false,
      defaultValue: 1
    },
    profile_picture: {
      type: DataTypes.STRING(255),
      comment: '头像 URL',
      allowNull: true
    },
    bio: {
      type: DataTypes.TEXT,
      comment: '个人简介',
      allowNull: true
    },
    date_of_birth: {
      type: DataTypes.DATEONLY,
      comment: '出生日期',
      allowNull: true
    }
  },
  {
    tableName: 'users',
    sequelize: db.getInstance(),
    updatedAt: 'updated_at',
    createdAt: 'created_at'
  }
)

export default User
