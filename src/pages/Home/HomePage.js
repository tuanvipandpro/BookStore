import React from 'react';
import { Row, Col, Tabs, Card, Image, Rate, Typography, BackTop, Input } from 'antd';
import SearchOutlined from '@ant-design/icons';

import AppMenu from '../../components/Common/AppMenu'
import HomeSlider from '../../components/Home/HomeSlider'
import '../../assets/css/Home/HomePage.scss'

import ImgBookDemo from '../../assets/images/harry-potter-1.jpg'

const { TabPane } = Tabs;
const { Text, Link } = Typography;
const { Search } = Input;

const test = {
    marginRight: '1%',
    width: '19%'
}

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
                    <Tabs type="card" style={{marginLeft: '5px'}}>
                        <TabPane tab="Best Seller" key="1"> 
                            <Row>
                                <Card style={test}>
                                    <Image src={ImgBookDemo} alt='book-image'/>
                                    <Rate disabled allowHalf defaultValue={4.5} />
                                    <Link style={{display: 'block', fontSize: '16px'}}>Harry Potter và hòn đá phù thủy</Link>
                                    <p>
                                        <span style={{fontSize: '18px', fontWeight: '600'}}>108.000 ₫</span>
                                        <Text disabled delete style={{marginLeft: '5px'}}>41.000 ₫</Text>
                                    </p>
                                </Card>   
                                <Card style={test}>
                                    <Image src={ImgBookDemo} alt='book-image'/>
                                    <Rate disabled allowHalf defaultValue={4.5} />
                                    <Link style={{display: 'block', fontSize: '16px'}}>Harry Potter và hòn đá phù thủy</Link>
                                    <p>
                                        <span style={{fontSize: '18px', fontWeight: '600'}}>108.000 ₫</span>
                                         <Text disabled delete style={{marginLeft: '5px'}}>41.000 ₫</Text>
                                    </p>
                                </Card>   
                                <Card style={test}>
                                    <Image src={ImgBookDemo} alt='book-image'/>
                                    <Rate disabled allowHalf defaultValue={4.5} />
                                    <Link style={{display: 'block', fontSize: '16px'}}>Harry Potter và hòn đá phù thủy</Link>
                                    <p>
                                        <span style={{fontSize: '18px', fontWeight: '600'}}>108.000 ₫</span>
                                         <Text disabled delete style={{marginLeft: '5px'}}>41.000 ₫</Text>
                                    </p>
                                </Card>   
                                <Card style={test}>
                                    <Image src={ImgBookDemo} alt='book-image'/>
                                    <Rate disabled allowHalf defaultValue={4.5} />
                                    <Link style={{display: 'block', fontSize: '16px'}}>Harry Potter và hòn đá phù thủy</Link>
                                    <p>
                                        <span style={{fontSize: '18px', fontWeight: '600'}}>108.000 ₫</span>
                                         <Text disabled delete style={{marginLeft: '5px'}}>41.000 ₫</Text>
                                    </p>
                                </Card>   
                                <Card style={test}>
                                    <Image src={ImgBookDemo} alt='book-image'/>
                                    <Rate disabled allowHalf defaultValue={4.5} />
                                    <Link style={{display: 'block', fontSize: '16px'}}>Harry Potter và hòn đá phù thủy</Link>
                                    <p>
                                        <span style={{fontSize: '18px', fontWeight: '600'}}>108.000 ₫</span>
                                         <Text disabled delete style={{marginLeft: '5px'}}>41.000 ₫</Text>
                                    </p>
                                </Card>    
                            </Row>       
                        </TabPane>
                        <TabPane tab="Sách Tiếng Việt" key="2"> 
                            <Row>
                                <Card style={test}>
                                    <Image src={ImgBookDemo} alt='book-image'/>
                                    <Rate disabled allowHalf defaultValue={4.5} />
                                    <Link style={{display: 'block', fontSize: '16px'}}>Harry Potter và hòn đá phù thủy</Link>
                                    <p>
                                        <span style={{fontSize: '18px', fontWeight: '600'}}>108.000 ₫</span>
                                         <Text disabled delete style={{marginLeft: '5px'}}>41.000 ₫</Text>
                                    </p>
                                </Card>   
                                <Card style={test}>
                                    <Image src={ImgBookDemo} alt='book-image'/>
                                    <Rate disabled allowHalf defaultValue={4.5} />
                                    <Link style={{display: 'block', fontSize: '16px'}}>Harry Potter và hòn đá phù thủy</Link>
                                    <p>
                                        <span style={{fontSize: '18px', fontWeight: '600'}}>108.000 ₫</span>
                                         <Text disabled delete style={{marginLeft: '5px'}}>41.000 ₫</Text>
                                    </p>
                                </Card>   
                                <Card style={test}>
                                    <Image src={ImgBookDemo} alt='book-image'/>
                                    <Rate disabled allowHalf defaultValue={4.5} />
                                    <Link style={{display: 'block', fontSize: '16px'}}>Harry Potter và hòn đá phù thủy</Link>
                                    <p>
                                        <span style={{fontSize: '18px', fontWeight: '600'}}>108.000 ₫</span>
                                         <Text disabled delete style={{marginLeft: '5px'}}>41.000 ₫</Text>
                                    </p>
                                </Card>   
                                <Card style={test}>
                                    <Image src={ImgBookDemo} alt='book-image'/>
                                    <Rate disabled allowHalf defaultValue={4.5} />
                                    <Link style={{display: 'block', fontSize: '16px'}}>Harry Potter và hòn đá phù thủy</Link>
                                    <p>
                                        <span style={{fontSize: '18px', fontWeight: '600'}}>108.000 ₫</span>
                                         <Text disabled delete style={{marginLeft: '5px'}}>41.000 ₫</Text>
                                    </p>
                                </Card>   
                                <Card style={test}>
                                    <Image src={ImgBookDemo} alt='book-image'/>
                                    <Rate disabled allowHalf defaultValue={4.5} />
                                    <Link style={{display: 'block', fontSize: '16px'}}>Harry Potter và hòn đá phù thủy</Link>
                                    <p>
                                        <span style={{fontSize: '18px', fontWeight: '600'}}>108.000 ₫</span>
                                         <Text disabled delete style={{marginLeft: '5px'}}>41.000 ₫</Text>
                                    </p>
                                </Card>    
                            </Row>       
                        </TabPane>
                        <TabPane tab="Sách Ngoại Văn" key="3"> 
                            <Row>
                                <Card style={test}>
                                    <Image src={ImgBookDemo} alt='book-image'/>
                                    <Rate disabled allowHalf defaultValue={4.5} />
                                    <Link style={{display: 'block', fontSize: '16px'}}>Harry Potter và hòn đá phù thủy</Link>
                                    <p>
                                        <span style={{fontSize: '18px', fontWeight: '600'}}>108.000 ₫</span>
                                         <Text disabled delete style={{marginLeft: '5px'}}>41.000 ₫</Text>
                                    </p>
                                </Card>   
                                <Card style={test}>
                                    <Image src={ImgBookDemo} alt='book-image'/>
                                    <Rate disabled allowHalf defaultValue={4.5} />
                                    <Link style={{display: 'block', fontSize: '16px'}}>Harry Potter và hòn đá phù thủy</Link>
                                    <p>
                                        <span style={{fontSize: '18px', fontWeight: '600'}}>108.000 ₫</span>
                                         <Text disabled delete style={{marginLeft: '5px'}}>41.000 ₫</Text>
                                    </p>
                                </Card>   
                                <Card style={test}>
                                    <Image src={ImgBookDemo} alt='book-image'/>
                                    <Rate disabled allowHalf defaultValue={4.5} />
                                    <Link style={{display: 'block', fontSize: '16px'}}>Harry Potter và hòn đá phù thủy</Link>
                                    <p>
                                        <span style={{fontSize: '18px', fontWeight: '600'}}>108.000 ₫</span>
                                         <Text disabled delete style={{marginLeft: '5px'}}>41.000 ₫</Text>
                                    </p>
                                </Card>   
                                <Card style={test}>
                                    <Image src={ImgBookDemo} alt='book-image'/>
                                    <Rate disabled allowHalf defaultValue={4.5} />
                                    <Link style={{display: 'block', fontSize: '16px'}}>Harry Potter và hòn đá phù thủy</Link>
                                    <p>
                                        <span style={{fontSize: '18px', fontWeight: '600'}}>108.000 ₫</span>
                                         <Text disabled delete style={{marginLeft: '5px'}}>41.000 ₫</Text>
                                    </p>
                                </Card>   
                                <Card style={test}>
                                    <Image src={ImgBookDemo} alt='book-image'/>
                                    <Rate disabled allowHalf defaultValue={4.5} />
                                    <Link style={{display: 'block', fontSize: '16px'}}>Harry Potter và hòn đá phù thủy</Link>
                                    <p>
                                        <span style={{fontSize: '18px', fontWeight: '600'}}>108.000 ₫</span>
                                         <Text disabled delete style={{marginLeft: '5px'}}>41.000 ₫</Text>
                                    </p>
                                </Card>    
                            </Row>       
                        </TabPane>
                        <TabPane tab="Tiểu Thuyết" key="4"> 
                            <Row>
                                <Card style={test}>
                                    <Image src={ImgBookDemo} alt='book-image'/>
                                    <Rate disabled allowHalf defaultValue={4.5} />
                                    <Link style={{display: 'block', fontSize: '16px'}}>Harry Potter và hòn đá phù thủy</Link>
                                    <p>
                                        <span style={{fontSize: '18px', fontWeight: '600'}}>108.000 ₫</span>
                                         <Text disabled delete style={{marginLeft: '5px'}}>41.000 ₫</Text>
                                    </p>
                                </Card>   
                                <Card style={test}>
                                    <Image src={ImgBookDemo} alt='book-image'/>
                                    <Rate disabled allowHalf defaultValue={4.5} />
                                    <Link style={{display: 'block', fontSize: '16px'}}>Harry Potter và hòn đá phù thủy</Link>
                                    <p>
                                        <span style={{fontSize: '18px', fontWeight: '600'}}>108.000 ₫</span>
                                         <Text disabled delete style={{marginLeft: '5px'}}>41.000 ₫</Text>
                                    </p>
                                </Card>   
                                <Card style={test}>
                                    <Image src={ImgBookDemo} alt='book-image'/>
                                    <Rate disabled allowHalf defaultValue={4.5} />
                                    <Link style={{display: 'block', fontSize: '16px'}}>Harry Potter và hòn đá phù thủy</Link>
                                    <p>
                                        <span style={{fontSize: '18px', fontWeight: '600'}}>108.000 ₫</span>
                                         <Text disabled delete style={{marginLeft: '5px'}}>41.000 ₫</Text>
                                    </p>
                                </Card>   
                                <Card style={test}>
                                    <Image src={ImgBookDemo} alt='book-image'/>
                                    <Rate disabled allowHalf defaultValue={4.5} />
                                    <Link style={{display: 'block', fontSize: '16px'}}>Harry Potter và hòn đá phù thủy</Link>
                                    <p>
                                        <span style={{fontSize: '18px', fontWeight: '600'}}>108.000 ₫</span>
                                         <Text disabled delete style={{marginLeft: '5px'}}>41.000 ₫</Text>
                                    </p>
                                </Card>   
                                <Card style={test}>
                                    <Image src={ImgBookDemo} alt='book-image'/>
                                    <Rate disabled allowHalf defaultValue={4.5} />
                                    <Link style={{display: 'block', fontSize: '16px'}}>Harry Potter và hòn đá phù thủy</Link>
                                    <p>
                                        <span style={{fontSize: '18px', fontWeight: '600'}}>108.000 ₫</span>
                                         <Text disabled delete style={{marginLeft: '5px'}}>41.000 ₫</Text>
                                    </p>
                                </Card>    
                            </Row>       
                        </TabPane>
                    </Tabs>
                </Col>
            </Row> 
            <Row>
                <div style={{width: '100%', height: '5vh', background: '#001529'}}></div>
            </Row> 
            <BackTop />           
        </div>
    );
}

export default HomePage