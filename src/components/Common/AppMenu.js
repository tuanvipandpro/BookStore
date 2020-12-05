import {React, useState} from 'react';
import { Menu } from 'antd';
import { HomeOutlined, ShopOutlined, SettingOutlined, ContactsOutlined } from '@ant-design/icons';
import { Redirect } from "react-router-dom";
const { SubMenu } = Menu;

const AppMenu = () => {
    const [redirect, setRedirect] = useState()

    // Transit To
    if (redirect) {
        return <Redirect to={redirect}/>
    }

    return (
        <Menu mode="horizontal" theme="dark" onClick={() => setRedirect('/')}>
            <Menu.Item key="home" icon={<HomeOutlined />}>
                Trang Chủ
            </Menu.Item>
            <Menu.Item key="contact" icon={<ContactsOutlined />}>
                Liên Hệ
            </Menu.Item>
            <Menu.Item key="product" icon={<ShopOutlined />}>
                Sản Phẩm
            </Menu.Item>
            <SubMenu
                key="SubMenu"
                icon={<SettingOutlined />}
                title="Navigation Three - Submenu"
            >
                <Menu.ItemGroup title="Item 1">
                    <Menu.Item key="setting:1">Option 1</Menu.Item>
                    <Menu.Item key="setting:2">Option 2</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup title="Item 2">
                    <Menu.Item key="setting:3">Option 3</Menu.Item>
                    <Menu.Item key="setting:4">Option 4</Menu.Item>
                </Menu.ItemGroup>
            </SubMenu>
        </Menu> 
    ); 
}

export default AppMenu