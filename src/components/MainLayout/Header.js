import React, { Component } from 'react'
import { Menu, Icon } from 'antd'
import { connect } from 'dva'

import { Link, routerRedux } from 'dva/router'
import layout from './layout.less';

class Header extends Component {
    render() {
        const { location,indexPage } = this.props
        return (
            <Menu
                className={layout.headermenu}
                selectedKeys={[location.pathname]}
                mode="horizontal"
                theme="dark"
            >
                {/* <Menu.Item key="/users">
                    <Link to="/users">
                        <Icon type="bars" />Users
                    </Link>
                </Menu.Item> */}
                {/* <Menu.Item key="/">
                    <Link to="/">
                        <Icon type="home" />Home
                    </Link>
                </Menu.Item> */}
                {/* <Menu.Item key="/404">
                    <Link to="/page-you-dont-know">
                        <Icon type="frown" />404
                    </Link>
                </Menu.Item>
                <Menu.Item key="/antd">
                    <a href="https://github.com/dvajs/dva">dva</a>
                </Menu.Item> */}
            </Menu>
        )
    }
}

function mapStateToProps({indexPage}) {
    return { indexPage };
}

export default connect(mapStateToProps)(Header)