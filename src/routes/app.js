import React from 'react'
import classnames from 'classnames'
import { connect } from 'dva'
import { Layout } from 'antd'
import { MyLayout } from '../components'
import { withRouter } from 'dva/router'
import { getMenuData } from '../common/menu'

const { Content } = Layout
const { Header, SiderMenu, styles } = MyLayout

const App = ({
  children, dispatch, app, location, match
}) => {
  console.log('============', match)
  const { siderFold, darkTheme, menu, navOpenKeys } = app
  const headerProps = {
    siderFold,
    switchSider () {
      dispatch({ type: 'app/switchSider' })
    },
    logout () {
      console.log('========')
    }
  }
  const siderProps = {
    menu,
    location,
    collapsed: siderFold,
    darkTheme,
    navOpenKeys,
    menuData: getMenuData(),
    changeTheme () {
    },
    changeOpenKeys (openKeys) {
    }
  }
  return (
    <Layout className={classnames({ [styles.dark]: darkTheme, [styles.light]: !darkTheme })}>
      <SiderMenu
        {...siderProps}
      />
      <Layout style={{ height: '100vh', overflow: 'scroll' }}>
        <Header {...headerProps} />
        <Content>
          Content
          {children}
        </Content>
      </Layout>
    </Layout>
  )
}

export default withRouter(connect(({ app, loading }) => ({ app, loading }))(App))
