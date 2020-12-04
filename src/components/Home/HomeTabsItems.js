import React from 'react';
import { Row, Tabs } from 'antd';
import CardItem from './CardItem'
// ${process.env.PUBLIC_URL}/assets/images/uc-white.png

const { TabPane } = Tabs;

const HomeTabsItems = () => {
    return (
        <Tabs type="card" style={{marginLeft: '5px'}}>
            <TabPane tab="Best Seller" key="1"> 
                <Row>
                    <CardItem name='Harry Potter và hòn đá phù thủy' price='41.000 ₫' oldPrice='108.000 ₫' rating={4.5}/>
                    <CardItem name='Harry Potter và hòn đá phù thủy' price='41.000 ₫' oldPrice='108.000 ₫' rating={4}/>
                    <CardItem name='Harry Potter và hòn đá phù thủy' price='41.000 ₫' oldPrice='108.000 ₫' rating={4}/>
                    <CardItem name='Harry Potter và hòn đá phù thủy' price='41.000 ₫' oldPrice='108.000 ₫' rating={4}/>
                    <CardItem name='Harry Potter và hòn đá phù thủy' price='41.000 ₫' oldPrice='108.000 ₫' rating={4}/>  
                </Row>             
                <Row>
                    <CardItem name='Harry Potter và hòn đá phù thủy' price='41.000 ₫' oldPrice='108.000 ₫' rating={4}/>
                    <CardItem name='Harry Potter và hòn đá phù thủy' price='41.000 ₫' oldPrice='108.000 ₫' rating={4}/>
                    <CardItem name='Harry Potter và hòn đá phù thủy' price='41.000 ₫' oldPrice='108.000 ₫' rating={4}/>
                    <CardItem name='Harry Potter và hòn đá phù thủy' price='41.000 ₫' oldPrice='108.000 ₫' rating={4}/>
                    <CardItem name='Harry Potter và hòn đá phù thủy' price='41.000 ₫' oldPrice='108.000 ₫' rating={4}/>  
                </Row>             
            </TabPane>
            <TabPane tab="Sách Tiếng Việt" key="2"> 
                <Row>
                    <CardItem name='Harry Potter và hòn đá phù thủy' price='41.000 ₫' oldPrice='108.000 ₫' rating={4}/>
                    <CardItem name='Harry Potter và hòn đá phù thủy' price='41.000 ₫' oldPrice='108.000 ₫' rating={4}/>
                    <CardItem name='Harry Potter và hòn đá phù thủy' price='41.000 ₫' oldPrice='108.000 ₫' rating={4}/>
                    <CardItem name='Harry Potter và hòn đá phù thủy' price='41.000 ₫' oldPrice='108.000 ₫' rating={4}/>
                    <CardItem name='Harry Potter và hòn đá phù thủy' price='41.000 ₫' oldPrice='108.000 ₫' rating={4}/>      
                </Row>       
                <Row>
                    <CardItem name='Harry Potter và hòn đá phù thủy' price='41.000 ₫' oldPrice='108.000 ₫' rating={4}/>
                    <CardItem name='Harry Potter và hòn đá phù thủy' price='41.000 ₫' oldPrice='108.000 ₫' rating={4}/>
                    <CardItem name='Harry Potter và hòn đá phù thủy' price='41.000 ₫' oldPrice='108.000 ₫' rating={4}/>
                    <CardItem name='Harry Potter và hòn đá phù thủy' price='41.000 ₫' oldPrice='108.000 ₫' rating={4}/>
                    <CardItem name='Harry Potter và hòn đá phù thủy' price='41.000 ₫' oldPrice='108.000 ₫' rating={4}/>      
                </Row>       
            </TabPane>
            <TabPane tab="Sách Ngoại Văn" key="3"> 
                <Row>
                    <CardItem name='Harry Potter và hòn đá phù thủy' price='41.000 ₫' oldPrice='108.000 ₫' rating={4}/>
                    <CardItem name='Harry Potter và hòn đá phù thủy' price='41.000 ₫' oldPrice='108.000 ₫' rating={4}/>
                    <CardItem name='Harry Potter và hòn đá phù thủy' price='41.000 ₫' oldPrice='108.000 ₫' rating={4}/>
                    <CardItem name='Harry Potter và hòn đá phù thủy' price='41.000 ₫' oldPrice='108.000 ₫' rating={4}/>
                    <CardItem name='Harry Potter và hòn đá phù thủy' price='41.000 ₫' oldPrice='108.000 ₫' rating={4}/>     
                </Row>       
                <Row>
                    <CardItem name='Harry Potter và hòn đá phù thủy' price='41.000 ₫' oldPrice='108.000 ₫' rating={4}/>
                    <CardItem name='Harry Potter và hòn đá phù thủy' price='41.000 ₫' oldPrice='108.000 ₫' rating={4}/>
                    <CardItem name='Harry Potter và hòn đá phù thủy' price='41.000 ₫' oldPrice='108.000 ₫' rating={4}/>
                    <CardItem name='Harry Potter và hòn đá phù thủy' price='41.000 ₫' oldPrice='108.000 ₫' rating={4}/>
                    <CardItem name='Harry Potter và hòn đá phù thủy' price='41.000 ₫' oldPrice='108.000 ₫' rating={4}/>     
                </Row>       
            </TabPane>
            <TabPane tab="Tiểu Thuyết" key="4"> 
                <Row>
                    <CardItem name='Harry Potter và hòn đá phù thủy' price='41.000 ₫' oldPrice='108.000 ₫' rating={4}/>
                    <CardItem name='Harry Potter và hòn đá phù thủy' price='41.000 ₫' oldPrice='108.000 ₫' rating={4}/>
                    <CardItem name='Harry Potter và hòn đá phù thủy' price='41.000 ₫' oldPrice='108.000 ₫' rating={4}/>
                    <CardItem name='Harry Potter và hòn đá phù thủy' price='41.000 ₫' oldPrice='108.000 ₫' rating={4}/>
                    <CardItem name='Harry Potter và hòn đá phù thủy' price='41.000 ₫' oldPrice='108.000 ₫' rating={4}/>    
                </Row>       
                <Row>
                    <CardItem name='Harry Potter và hòn đá phù thủy' price='41.000 ₫' oldPrice='108.000 ₫' rating={4}/>
                    <CardItem name='Harry Potter và hòn đá phù thủy' price='41.000 ₫' oldPrice='108.000 ₫' rating={4}/>
                    <CardItem name='Harry Potter và hòn đá phù thủy' price='41.000 ₫' oldPrice='108.000 ₫' rating={4}/>
                    <CardItem name='Harry Potter và hòn đá phù thủy' price='41.000 ₫' oldPrice='108.000 ₫' rating={4}/>
                    <CardItem name='Harry Potter và hòn đá phù thủy' price='41.000 ₫' oldPrice='108.000 ₫' rating={4}/>    
                </Row>       
            </TabPane>
        </Tabs>        
    );
}

export default HomeTabsItems