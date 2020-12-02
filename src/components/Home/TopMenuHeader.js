import React from 'react';
import '../../assets/css/Home/TopMenuHeader.scss'

import { Menu, Dropdown, Button } from 'antd';
import { ShoppingCartOutlined, UserOutlined, UnorderedListOutlined, MailOutlined } from '@ant-design/icons';

const menu = (
    <Menu>
      <Menu.Item key="1" icon={<UserOutlined />}>
        Hồ sơ
      </Menu.Item>
      <Menu.Item key="2" icon={<UserOutlined />}>
        Đăng xuất
      </Menu.Item>
    </Menu>
);

const TopMenuHeader = () => {
    return (
        <div className='top-menu-header'>
            <div className='top-menu-header-left'>
                <MailOutlined /> tuanvipandpro@gmail.com
            </div>            
            <div className='top-menu-header-right'>
                <Dropdown overlay={menu} disabled={true}>
                    <Button>
                        <UnorderedListOutlined />
                    </Button>
                </Dropdown>
                <Button>
                    <ShoppingCartOutlined />
                </Button>
            </div>
        </div>
    );
}

export default TopMenuHeader