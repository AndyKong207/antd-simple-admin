import React from 'react'
import { Route, Switch, routerRedux } from 'dva/router'
import dynamic from 'dva/dynamic'
import App from './routes/app'
// import { getRoutes } from './utils'
import { getRouterData } from './common/router'

// import IndexPage from './routes/IndexPage'
// import SiderDemo from './components/Layout'
// import User from './routes/User'
const { ConnectedRouter } = routerRedux

function RouterConfig ({ history, app }) {
  const routes = [
    {
      path: '/user-list',
      component: () => import('./routes/User')
    }
  ]
  const routerData = getRouterData(app)
  const BasicLayout = routerData['/'].component
  return (
    <ConnectedRouter history={history}>
      <App>
        <Switch>
          <Route path='/' exact component={BasicLayout} />
          {
            routes.map(({ path, ...dynamics }, key) => (
              <Route
                key={key}
                exact
                path={path}
                component={dynamic({
                  app,
                  ...dynamics
                })}
              />
            ))
          }
        </Switch>
      </App>
    </ConnectedRouter>
  )
}

export default RouterConfig
