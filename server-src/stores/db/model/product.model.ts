import { Model, DataTypes } from 'sequelize'
import db from '../instance'

class Product extends Model<{
  product_id: string,
  name: string,
  description: string,
  price: number,
  discount_price: number,
  sku: string,
  stock: number,
  category: string,
  brand: string,
  weight: number,
  dimensions: string,
  color: string,
  size: string,
  material: string,
  warranty: string,
  image_url: string,
  status: number,
  rating: number,
  reviews_count: number,
  tags: string,
  featured: boolean,
}> {}

Product.init(
  {
    product_id: {
      type: DataTypes.STRING(36),
      comment: '商品 ID',
      primaryKey: true,
      allowNull: false,
      defaultValue: ''
    },
    name: {
      type: DataTypes.STRING(255),
      comment: '商品名称',
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      comment: '商品描述',
      allowNull: true
    },
    price: {
      type: DataTypes.FLOAT,
      comment: '商品价格',
      allowNull: false,
      defaultValue: 0.0
    },
    discount_price: {
      type: DataTypes.FLOAT,
      comment: '折扣价格',
      allowNull: true,
      defaultValue: 0.0
    },
    sku: {
      type: DataTypes.STRING(100),
      comment: '库存单位',
      allowNull: false,
      unique: true
    },
    stock: {
      type: DataTypes.INTEGER,
      comment: '库存数量',
      allowNull: false,
      defaultValue: 0
    },
    category: {
      type: DataTypes.STRING(100),
      comment: '商品分类',
      allowNull: false
    },
    brand: {
      type: DataTypes.STRING(100),
      comment: '品牌',
      allowNull: true
    },

    weight: {
      type: DataTypes.FLOAT,
      comment: '重量（公斤）',
      allowNull: true,
      defaultValue: 0.0
    },
    dimensions: {
      type: DataTypes.STRING(100),
      comment: '尺寸（长x宽x高）',
      allowNull: true
    },
    color: {
      type: DataTypes.STRING(50),
      comment: '颜色',
      allowNull: true
    },
    size: {
      type: DataTypes.STRING(50),
      comment: '尺寸',
      allowNull: true
    },
    material: {
      type: DataTypes.STRING(100),
      comment: '材质',
      allowNull: true
    },
    warranty: {
      type: DataTypes.STRING(100),
      comment: '保修期',
      allowNull: true
    },
    image_url: {
      type: DataTypes.STRING(255),
      comment: '商品图片 URL',
      allowNull: true
    },
    status: {
      type: DataTypes.TINYINT,
      comment: '商品状态：0-下架，1-上架',
      allowNull: false,
      defaultValue: 1
    },
    rating: {
      type: DataTypes.FLOAT,
      comment: '平均评分',
      allowNull: true,
      defaultValue: 0.0
    },
    reviews_count: {
      type: DataTypes.INTEGER,
      comment: '评论数量',
      allowNull: true,
      defaultValue: 0
    },
    tags: {
      type: DataTypes.STRING(255),
      comment: '标签（逗号分隔）',
      allowNull: true
    },
    featured: {
      type: DataTypes.BOOLEAN,
      comment: '是否为推荐商品',
      allowNull: false,
      defaultValue: false
    }
  },
  {
    tableName: 'products',
    sequelize: db.getInstance(),
    updatedAt: 'updated_at',
    createdAt: 'created_at'
  }
)

export default Product
