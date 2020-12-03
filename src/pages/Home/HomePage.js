import React from 'react';
// import TopMenuHeader from '../../components/Home/TopMenuHeader'
import { Row, Col, Carousel, Tabs, Image, Menu } from 'antd';
import { HomeOutlined, ShopOutlined, SettingOutlined, ContactsOutlined } from '@ant-design/icons';
import flashSale from '../../assets/images/flash-sale.jpg'

import '../../assets/css/Home/HomePage.scss'

const { TabPane } = Tabs;
const { SubMenu } = Menu;

const contentStyle = {
    height: '30vh',
    color: '#fff',
    lineHeight: '18vh',
    textAlign: 'center',
    background: '#364d79'
};

const HomePage = () => {
    return (        
        <div id='home-page'>     
            <Menu mode="horizontal" style={{marginBottom: '0.1vh'}} theme="dark">
                <Menu.Item key="home" icon={<HomeOutlined />}>
                    Trang Chủ
                </Menu.Item>
                <Menu.Item key="app" icon={<ContactsOutlined />}>
                    Liên Hệ
                </Menu.Item>
                <Menu.Item key="app1" icon={<ShopOutlined />}>
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
            <Carousel autoplay>
                <div>
                    <h3 style={contentStyle}>1</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>2</h3>
                </div>                                        
                <div>
                    <h3 style={contentStyle}>3</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>4</h3>
                </div>                                        
            </Carousel>                    
            <Row>
                <Col span={6}>
                    <Image
                        style={{marginLeft: '5px'}}
                        width={450}
                        src={flashSale}
                        alt='flash-sale'
                    />                    
                </Col>
                <Col span={18}>
                    <Tabs type="card">
                        <TabPane tab="Best Seller" key="1">
                            Content of Tab Pane 1
                        </TabPane>
                        <TabPane tab="Tiểu Thuyết" key="2">
                            Content of Tab Pane 2
                        </TabPane>
                        <TabPane tab="Truyện Tranh" key="3">
                            Content of Tab Pane 3
                        </TabPane>
                        <TabPane tab="Sách Ngoại Văn" key="4">
                            Content of Tab Pane 3
                        </TabPane>
                        <TabPane tab="Văn Phòng Phẩm" key="5">
                            Content of Tab Pane 3
                        </TabPane>
                    </Tabs>                
                </Col>
            </Row>             
        </div>
    );
}

export default HomePage