import React from 'react';
import { Row } from 'antd';

const AppFooterStyle = {
    height: '3vh', 
    lineHeight: '3vh', 
    background: '#001529', 
    color: 'white', 
    justifyContent: 'center', 
    position: 'fixed', 
    left: 0, 
    bottom: 0, 
    width: '100%'
}

const AppFooter = () => {
    return (
        <Row style={AppFooterStyle}>
            <p style={{color: 'white', fontSize: '12px'}}>
                © 2020 - Bản quyền của TuanLM
            </p>
        </Row> 
    )
}

export default AppFooter