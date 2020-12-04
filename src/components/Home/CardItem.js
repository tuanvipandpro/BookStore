import React from 'react';

import { Card, Image, Rate, Typography } from 'antd';
import ImgBookDemo from '../../assets/images/harry-potter-1.jpg'

const { Text, Link } = Typography;

const CardStyle = {
    marginRight: '1%',
    width: '19%'
}


const CardItem = (props) => {
    return (
        <Card style={CardStyle}>
            <Image src={ImgBookDemo} alt='book-image'/>
            <Rate disabled allowHalf defaultValue={props.rating} />
            <Link href='/details' style={{display: 'block', fontSize: '16px'}}>{props.name}</Link>
            <p>
                <span style={{fontSize: '18px', fontWeight: '600'}}>{props.price}</span>
                <Text disabled delete style={{marginLeft: '5px'}}>{props.oldPrice}</Text>
            </p>
        </Card>           
    )
}

export default CardItem