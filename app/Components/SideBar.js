import React from 'react';
import { browserHistory } from 'react-router';


// 引入Antd组件
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;

export default class Sidebar extends React.Component {
    //
    // handleClick = (e) => {
    //     this.setState({ current: e.key });
    //     this.changeCookie(e.key);
    //     if(e.key == "home"){
    //         browserHistory.push('/');
    //     }else if(e.key == 'list'){
    //         browserHistory.push('list');
    //     }else if(e.key == 'report'){
    //         browserHistory.push('report');
    //     }else if(e.key == 'user'){
    //         browserHistory.push('user');
    //     } else if(e.key == 'setting'){
    //         browserHistory.push('setting');
    //     } else if(e.key == 'qrcode'){
    //         browserHistory.push('qrcode');
    //     }else if(e.key == 'solution'){
    //         browserHistory.push('solution');
    //     }
    // }

    render() {
        return (
            <div id="leftMenu">
                <Menu
                    onClick={this.handleClick}
                    mode="vertical"
                    style={{ width: 146,
                    height:800,paddingTop:90}}
                >
                    <Menu.Item key="home"><Icon type="home" />首页</Menu.Item>
                    <SubMenu key="sub1" title={<span><Icon type="bar-chart" /><span>导航一</span></span>}>
                        <Menu.Item key="list">子导航一</Menu.Item>
                        <Menu.Item key="report">子导航二</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="user"><Icon type="user" />用户中心</Menu.Item>
                    <Menu.Item key="setting"><Icon type="setting" />系统配置</Menu.Item>
                    <SubMenu key="sub2" title={<span><Icon type="team" /><span>和我联系</span></span>}>
                        <Menu.Item key="qrcode"><Icon type="qrcode" />QrCode</Menu.Item>
                        <Menu.Item key="solution"><Icon type="solution" />联系方式</Menu.Item>
                    </SubMenu>
                </Menu>
                <div id="copyright">Copyright © Callback</div>
            </div>
        )
    }
}
