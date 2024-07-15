import { HttpError } from 'routing-controllers'

export * from './aync.util'
export * from './validator.util'
export * from './cmd-prompt.util'

export const sleep = async (t = 0): Promise<void> => {
  return new Promise<void>(resolve => {
    setTimeout(() => {
      resolve()
    }, t)
  })
}

export const getDataType = (data: any): string => {
  const type = Object.prototype.toString.call(data)
  switch (type) {
    case '[object Null]':
      return 'null'
    case '[object Undefined]':
      return 'undefined'
    case '[object Boolean]':
      return 'boolean'
    case '[object Number]':
      return 'number'
    case '[object String]':
      return 'string'
    case '[object Function]':
      return 'function'
    case '[object Array]':
      return 'array'
    case '[object Date]':
      return 'date'
    case '[object RegExp]':
      return 'regexp'
    case '[object Object]':
      return 'object'
    case '[object Map]':
      return 'map'
    case '[object Set]':
      return 'set'
    case '[object WeakMap]':
      return 'weakmap'
    case '[object WeakSet]':
      return 'weakset'
    case '[object Symbol]':
      return 'symbol'
    case '[object BigInt]':
      return 'bigint'
    case '[object Error]':
      return 'error'
    default:
      return type
  }
}

export const objectToJson = (value: Record<string, any> | Array<any>): string | null => {
  try {
    return JSON.stringify(value, null, 2)
  } catch (e) {
  }

  return null
}

export const generateErrorIns = (e: any): Error => {
  if (e instanceof HttpError) {
    return new Error(e.message)
  }

  if (e instanceof Error) {
    return e
  }

  if (typeof e === 'string') {
    return new Error(e)
  }

  if (e.toString) {
    return new Error(e.toString())
  }

  if (e.message) {
    return new Error(e.message)
  }

  return new Error('Unknown error')
}
