import React from 'react';
import { Row, Col, BackTop } from 'antd';

import AppMenu from '../../components/Common/AppMenu'
import AppFooter from '../../components/Common/AppFooter'
import '../../assets/css/Home/HomePage.scss'

const DetailsPage = () => {
    return (        
        <div id='home-page'>
            <Row>
                <Col span={24}><AppMenu/></Col>
            </Row>
            <Row style={{marginTop: '1vh'}}>
                Hello
            </Row> 
            <AppFooter/>
            <BackTop />           
        </div>
    );
}

export default DetailsPage