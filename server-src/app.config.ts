import path from 'path'
import dotenv from 'dotenv'

const DEFAULT_ENV = 'development'

export const FEATURE_ENV: string = process.env.FEATURE_ENV || DEFAULT_ENV

export const NODE_ENV: string = process.env.NODE_ENV || DEFAULT_ENV

export const IS_FEATURE_PRODUCTION: boolean = FEATURE_ENV === 'production'

// 加载环境
dotenv.config({
  path: path.resolve(__dirname, `../.env.${FEATURE_ENV || DEFAULT_ENV}`)
})

// 加载默认
dotenv.config({
  path: path.resolve(__dirname, '../.env')
})


/**
 * @description ENV config
 * */
const ENV_CONFIG: {
  SERVER_PORT: number
} = process.env as any

/**
 * @description 端口
 * @type {Number}
 * */
export const SERVER_PORT: number = +ENV_CONFIG.SERVER_PORT

/**
 * @description 静态资源目录
 * @type {String}
 * */
export const STATIC_PUBLIC_PATH: string = path.resolve(__dirname, '../dist-client')


/**
 * @description API 接口前缀
 * @type {String}
 * */
export const API_PREFIX = '/api'


