import React, { Component } from 'react'
import { Menu, Icon, Button } from 'antd'
import { connect } from 'dva'

import { Link, routerRedux } from 'dva/router'
import layout from './layout.less';

const SubMenu = Menu.SubMenu;

class LeftMenu extends Component {

    state = {
        collapsed: false,
    }

    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }


    render() {
        const { index, dispatch } = this.props
        var menu = [], submenu = [], thirdmenu = []
        if (index && index.menu && index.menu.powers && index.menu.powers.length > 0) {
            index.menu.powers.map((v, i) => {
                if (!v.children || v.children && v.children.length == 0) {
                    menu.push(
                        <Menu.Item key={v.code}>
                            <Link to={v.link} replace>
                                <Icon type={v.icon} /><span>{v.name}</span>
                            </Link>
                        </Menu.Item>
                    )
                } else {
                    submenu = []
                    v.children.map((vv, ii) => {
                        if (!vv.children || vv.children && vv.children.length == 0) {
                            submenu.push(
                                <Menu.Item key={vv.code}>
                                    <Link to={vv.link} replace>{vv.name}</Link>
                                </Menu.Item>
                            )
                        } else {
                            thirdmenu = []
                            vv.children.map((vvv, iii) => {
                                thirdmenu.push(
                                    <Menu.Item key={vvv.code}>
                                        <Link to={vvv.link} replace>{vvv.name}</Link>
                                    </Menu.Item>
                                )
                            })
                            submenu.push(
                                <SubMenu key={vv.code} title={vv.name}>
                                    {thirdmenu}
                                </SubMenu>
                            )
                        }
                    })
                    menu.push(
                        <SubMenu key={v.code} title={<span><Icon type={v.icon} /><span>{v.name}</span></span>}>
                            {submenu}
                        </SubMenu>
                    )
                }
            })
        }

        function selectChange(e){
            console.log(e,[e.key])
            dispatch({
                type:'menu/updatePayload',
                payload:{
                    selectedKeys:[e.key]
                }
            })
            sessionStorage.setItem('selectedKeys',e.key)
        }
        console.log(index)
        return (
            <div className={layout.leftmenu}>
                {/* <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
                    <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
                </Button> */}
                <div className={layout.leftsubmenu}>
                    <Menu
                        onClick={selectChange}
                        selectedKeys={index&&index.selectedKeys}
                        // defaultOpenKeys={[]}
                        mode="inline"
                        theme="dark"
                        inlineCollapsed={this.state.collapsed}
                    >
                        {menu}
                        {/* <Menu.Item key="1">
                        <Icon type="pie-chart" />
                        <span>Option 1</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="desktop" />
                        <span>Option 2</span>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Icon type="inbox" />
                        <span>Option 3</span>
                    </Menu.Item>
                    <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
                        <Menu.Item key="5">Option 5</Menu.Item>
                        <Menu.Item key="6">Option 6</Menu.Item>
                        <Menu.Item key="7">Option 7</Menu.Item>
                        <Menu.Item key="8">Option 8</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
                        <Menu.Item key="9">Option 9</Menu.Item>
                        <Menu.Item key="10">Option 10</Menu.Item>
                        <SubMenu key="sub3" title="Submenu">
                            <Menu.Item key="11">Option 11</Menu.Item>
                            <Menu.Item key="12">Option 12</Menu.Item>
                        </SubMenu>
                    </SubMenu> */}
                    </Menu>
                </div>
            </div>
        );
    }
}

function mapStateToProps({ menu }) {
    return { index:menu };
}

export default connect(mapStateToProps)(LeftMenu)