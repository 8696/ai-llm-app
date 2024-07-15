import { Redirect } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'
import React from 'react'
import './main.less'
import routes from '../routes'

export default () => {

  return (
    <>
      <React.Suspense fallback={<></>}>
        <Switch>
          {routes.map(item => (
            <Route key={item.link} path={item.link} component={item.C} />
          ))}
          <Route exact path='*' render={() => <Redirect to='/404' />} />
        </Switch>
      </React.Suspense>
    </>
  )
}
