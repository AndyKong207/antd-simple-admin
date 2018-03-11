import React from 'react'
import Menus from './Menu'
import styles from './Layout.less'

import { Icon, Switch } from 'antd'

const Sider = ({
  siderFold, darkTheme, location, changeTheme, navOpenKeys, changeOpenKeys, menu
}) => {
  /**
   * 根据菜单取得重定向地址.
   */
  const redirectData = []
  const getRedirect = (item) => {
    if (item && item.children) {
      if (item.children[0] && item.children[0].path) {
        redirectData.push({
          from: `${item.path}`,
          to: `${item.children[0].path}`
        })
        item.children.forEach((children) => {
          getRedirect(children)
        })
      }
    }
  }
  getMenuData().forEach(getRedirect)

  const menusProps = {
    menu,
    siderFold,
    darkTheme,
    location,
    navOpenKeys,
    changeOpenKeys
  }
  return (
    <div>
      <div>
        LOGO
      </div>
      <Menus {...menusProps} />
      {!siderFold ? <div className={styles.switchtheme}>
        <span><Icon type='bulb' />切换主题</span>
        <Switch onChange={changeTheme} defaultChecked={darkTheme} checkedChildren='Dark' unCheckedChildren='Light' />
      </div> : ''}
    </div>
  )
}

export default Sider
