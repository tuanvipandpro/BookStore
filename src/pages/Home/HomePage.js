import React from 'react';
import TopMenuHeader from '../../components/Home/TopMenuHeader'
import { Row, Col } from 'antd';

import '../../assets/css/Home/HomePage.scss'

const HomePage = () => {
    return (
        <div id='home-page'>           
            <Row>
                <TopMenuHeader/>
            </Row>
            <Row>
                <Col span={6}/>
                <h1>Hello</h1>
            </Row>             
        </div>
    );
}

export default HomePage