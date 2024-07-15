import requestHooks from '@/helper/request-hook.helper'
import { request } from '@/helper/request.helper'


interface TParams {
  project_id?: string;
  name?: string,
  STATUS?: number,
  CODE?: number,
  MESSAGE?: string,
  MOCK_TEMPLATE?: string

}
interface TResponse {
  name: {
    first: string,
    last: string
    full: string
  };
}
// export const useUserConfig = requestHooks<TParams, TResponse>((data) => axios.get('/http/code-error', { data }));
export const useUserConfig = requestHooks<TParams, TResponse>((data) => request('/http/code-error', 'POST', data))
// export const useUserConfig = requestHooks<TParams, TResponse>((data) => axios.get('/http/200', { data }))
