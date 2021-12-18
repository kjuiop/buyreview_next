import React from 'react';

import { Row, Col, Card } from 'antd';

const { Meta } = Card;

const cardWrapper = {
    padding : '10px',
    width : '240px',
}

const cardImg = {
    borderRadius : '20px'
}

const ItemCard = ({ }) => {

    return (
        <>
            <Row>
                <Col xs={12}>
                    <Card
                        hoverable
                        style={cardWrapper}
                        cover={<img style={cardImg} alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Meta title="Europe Street beat" description="www.instagram.com" />
                    </Card>
                </Col>
                <Col xs={12}>
                    <Card
                        hoverable
                        style={cardWrapper}
                        cover={<img style={cardImg} alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Meta title="Europe Street beat" description="www.instagram.com" />
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <Card
                        hoverable
                        style={cardWrapper}
                        cover={<img style={cardImg} alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Meta title="Europe Street beat" description="www.instagram.com" />
                    </Card>
                </Col>
                <Col xs={12}>
                    <Card
                        hoverable
                        style={cardWrapper}
                        cover={<img style={cardImg} alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Meta title="Europe Street beat" description="www.instagram.com" />
                    </Card>
                </Col>
            </Row>
        </>
    )
};

export default ItemCard;