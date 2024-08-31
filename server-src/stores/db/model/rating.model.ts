import { Model, DataTypes } from 'sequelize'
import db from '../instance'

class Rating extends Model<{
  rating_id: string,
  user_id: string,
  product_id: string,
  order_id: string,
  rating: number,
  comment: string,
  likes: number,
  dislikes: number,
}> {}

Rating.init(
  {
    rating_id: {
      type: DataTypes.STRING(36),
      comment: '评分 ID',
      primaryKey: true,
      allowNull: false,
      defaultValue: ''
    },
    user_id: {
      type: DataTypes.STRING(36),
      comment: '用户 ID',
      allowNull: false
    },
    product_id: {
      type: DataTypes.STRING(36),
      comment: '商品 ID',
      allowNull: false
    },
    order_id: {
      type: DataTypes.STRING(36),
      comment: '订单 ID',
      allowNull: false
    },
    rating: {
      type: DataTypes.TINYINT,
      comment: '评分（1-5）',
      allowNull: false,
      defaultValue: 0
    },
    comment: {
      type: DataTypes.TEXT,
      comment: '评论内容',
      allowNull: true
    },
    likes: {
      type: DataTypes.INTEGER,
      comment: '点赞数',
      allowNull: false,
      defaultValue: 0
    },
    dislikes: {
      type: DataTypes.INTEGER,
      comment: '点踩数',
      allowNull: false,
      defaultValue: 0
    }
  },
  {
    tableName: 'ratings',
    sequelize: db.getInstance(),
    updatedAt: 'updated_at',
    createdAt: 'created_at'
  }
)

export default Rating
