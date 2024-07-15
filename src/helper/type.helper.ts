/**
 * @description 获取数据类型
 * */
export const getType = (value: any): string => {
  return {}.toString.call(value).slice(8, -1).toLowerCase()
}

export const isUndefined = (value: any): boolean => getType(value) === 'undefined'
export const isArray = (value: any): boolean => getType(value) === 'array'
export const isObject = (value: any): boolean => getType(value) === 'object'
