import { useRequest } from 'ahooks'

import type { Options, Service } from 'ahooks/lib/useRequest/src/types'


interface ResultType<R = Record<string, any>> {
  data: R;
  code: number;
  message?: string;
}


function requestHooks<TParams = any, TData = any>(
  service: Service<ResultType<TData>, [TParams]>,
  defaultOptions?: Options<TData, [TParams]>
) {
  return (defaultParams?: TParams, options?: Options<TData, [TParams]>) => {
    return useRequest<TData, [TParams]>(
      async (params?) => {
        const result = await service(params || defaultParams || ({} as TParams))
        return result.data
      },
      {
        ...defaultOptions,
        ...options
      }
    )
  }
}


export default requestHooks
