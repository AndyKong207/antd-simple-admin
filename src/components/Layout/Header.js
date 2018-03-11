import React from 'react'
import { Layout, Menu, Icon } from 'antd'
import styles from './Header.less'

const { SubMenu } = Menu

const Header = ({
  logout, switchSider, siderFold
}) => {
  let handleClickMenu = e => e.key === 'logout' && logout()
  return (
    <Layout.Header className={styles.header} >
      <div
        className={styles.button}
        onClick={switchSider}
      >
        <Icon type={siderFold ? 'menu-unfold' : 'menu-fold'} />
      </div>
      <div>
        <Menu mode='horizontal' onClick={handleClickMenu}>
          <SubMenu
            style={{float: 'right'}}
            title={<span>
              <Icon type='user' />
              AndyKong
            </span>}
          >
            <Menu.Item key='logout'>
              退出登录
            </Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    </Layout.Header>
  )
}

export default Header
