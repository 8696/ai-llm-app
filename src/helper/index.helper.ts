import { isArray, isObject } from '@/helper/type.helper'
import { IS_DEV } from '@/env.config'

export const logPrettyJSON = (msg: string, data: any) => {
  if (!IS_DEV) return
  if (isArray(data) || isObject(data)) {
    console.groupCollapsed(msg)
    console.log(JSON.stringify(data, null, 2))
    console.groupEnd()
  }
}
