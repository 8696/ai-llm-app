import style from './index.module.less'
import { Button } from 'antd'
import { useHistory } from 'react-router-dom'
import route from '@/routes'


export default () => {

  const history = useHistory()


  const to = (path: string) => {
    history.push(path)
  }

  return (
    <div className={`${style.container} flex justify-center align-center flex-col`}>
      {route.map((item) => {
        return <Button onClick={() => to(item.link)} key={item.name} className={'text-40 h-auto'} type={'link'}>{ item.name }</Button>
      })}
    </div>
  )
}
