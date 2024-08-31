import { Model, DataTypes } from 'sequelize'
import db from '../instance'

class Order extends Model<{
  order_id: string,
  product_id: string,
  order_user_id: string,
  total_amount: number,
  status: number,
  payment_method: string,
  payment_status: number,
  shipping_address: string,
  shipping_cost: number,
  discount: number,
  tax: number,
  currency: string,
  shipped_at: Date,
  delivered_at: Date,
  tracking_number: string,
  notes: string,
  recipient_name: string,
  recipient_phone: string,
  delivery_instructions: string,
  order_source: string,
  gift: boolean,
  gift_message: string,
  invoice_id: string,
  invoice_date: Date,
  promised_delivery_date: Date,
  estimated_delivery_date: Date,
}> {}

Order.init(
  {
    order_id: {
      type: DataTypes.STRING(36),
      comment: '订单 ID',
      primaryKey: true,
      allowNull: false,
      defaultValue: ''
    },
    order_user_id: {
      type: DataTypes.STRING(36),
      comment: '下单用户 ID',
      allowNull: false
    },
    product_id: {
      type: DataTypes.STRING(36),
      comment: '下单商品 ID',
      allowNull: false
    },
    total_amount: {
      type: DataTypes.FLOAT,
      comment: '订单总金额',
      allowNull: false,
      defaultValue: 0.0
    },
    status: {
      type: DataTypes.TINYINT,
      comment: '订单状态：0-未支付，1-已支付，2-已发货，3-已完成，4-已取消',
      allowNull: false,
      defaultValue: 0
    },
    payment_method: {
      type: DataTypes.STRING(50),
      comment: '支付方式',
      allowNull: false
    },
    payment_status: {
      type: DataTypes.TINYINT,
      comment: '支付状态：0-未支付，1-已支付，2-支付失败',
      allowNull: false,
      defaultValue: 0
    },
    shipping_address: {
      type: DataTypes.STRING(255),
      comment: '收货地址',
      allowNull: false
    },
    shipping_cost: {
      type: DataTypes.FLOAT,
      comment: '运费',
      allowNull: false,
      defaultValue: 0.0
    },
    discount: {
      type: DataTypes.FLOAT,
      comment: '折扣金额',
      allowNull: false,
      defaultValue: 0.0
    },
    tax: {
      type: DataTypes.FLOAT,
      comment: '税费',
      allowNull: false,
      defaultValue: 0.0
    },
    currency: {
      type: DataTypes.STRING(10),
      comment: '货币类型',
      allowNull: false,
      defaultValue: 'USD'
    },
    shipped_at: {
      type: DataTypes.DATE,
      comment: '发货时间',
      allowNull: true
    },
    delivered_at: {
      type: DataTypes.DATE,
      comment: '送达时间',
      allowNull: true
    },
    tracking_number: {
      type: DataTypes.STRING(50),
      comment: '物流追踪号',
      allowNull: true
    },
    notes: {
      type: DataTypes.TEXT,
      comment: '订单备注',
      allowNull: true
    },
    recipient_name: {
      type: DataTypes.STRING(100),
      comment: '收货人姓名',
      allowNull: false
    },
    recipient_phone: {
      type: DataTypes.STRING(20),
      comment: '收货人电话',
      allowNull: false
    },
    delivery_instructions: {
      type: DataTypes.TEXT,
      comment: '送货说明',
      allowNull: true
    },
    order_source: {
      type: DataTypes.STRING(50),
      comment: '订单来源（例如：网站，移动应用）',
      allowNull: false
    },
    gift: {
      type: DataTypes.BOOLEAN,
      comment: '是否为礼物',
      allowNull: false,
      defaultValue: false
    },
    gift_message: {
      type: DataTypes.TEXT,
      comment: '礼物留言',
      allowNull: true
    },
    invoice_id: {
      type: DataTypes.STRING(36),
      comment: '发票 ID',
      allowNull: true
    },
    invoice_date: {
      type: DataTypes.DATE,
      comment: '发票日期',
      allowNull: true
    },
    promised_delivery_date: {
      type: DataTypes.DATE,
      comment: '承诺送达时间',
      allowNull: true
    },
    estimated_delivery_date: {
      type: DataTypes.DATE,
      comment: '预计送达时间',
      allowNull: true
    }
  },
  {
    tableName: 'orders',
    sequelize: db.getInstance(),
    updatedAt: 'updated_at',
    createdAt: 'created_at'
  }
)

export default Order
