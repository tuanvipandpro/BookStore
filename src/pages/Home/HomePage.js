import React from 'react';
import { Row, Col, BackTop, Input } from 'antd';
import SearchOutlined from '@ant-design/icons';

import AppMenu from '../../components/Common/AppMenu'
import AppFooter from '../../components/Common/AppFooter'
import HomeSlider from '../../components/Home/HomeSlider'
import HomeTabsItems from '../../components/Home/HomeTabsItems'
import '../../assets/css/Home/HomePage.scss'

const { Search } = Input;

const HomePage = () => {
    return (        
        <div id='home-page'>
            <Row>
                <Col span={24}><AppMenu/></Col>
            </Row>
            <Row>
                <Col span={24}><HomeSlider/></Col>
            </Row>
            <Row style={{marginTop: '1vh'}}>
                <Col span={24}>
                    <Search size="large" suffix={<SearchOutlined />} allowClear placeholder="Sách bạn muốn tìm ???" enterButton="Tìm kiếm" style={{ width: 500, marginLeft: '1vw' }} />
                </Col>
            </Row>
            <Row style={{marginTop: '1vh'}}>
                <Col span={24}>
                    <HomeTabsItems/>
                </Col>
            </Row> 
            {/* <Row style={{height: '5vh', background: '#ecf0f1'}}>
                <Col span={6}>a<Divider type="vertical" /></Col>
                <Col span={6}>b<Divider type="vertical" /></Col>
                <Col span={6}>c<Divider type="vertical" /></Col>
                <Col span={6}>d</Col>
            </Row>  */}
            <AppFooter/>
            <BackTop />           
        </div>
    );
}

export default HomePage