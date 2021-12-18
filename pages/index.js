import React from 'react';
import Link from 'next/link';
import AppLayout from '../components/AppLayout';
import TopNavBar from '../components/TopNav';
import BottomNavBar from '../components/BottomNav';
import { DownloadOutlined } from '@ant-design/icons';
import { Row, Col, Divider, Card } from 'antd';

import CategoryBar from '../components/CategoryBar';
import ItemCard from '../components/ItemCard';

const { Meta } = Card;

const cardHeader = {
    padding : '10px',
    color: '#999',
    fontWeight : 'bold',
    fontSize: '14px'
}

const divierMargin = {
    marginTop : '5px',
    marginBottom : '20px'
}

const Home = () => {

    return (
        <AppLayout>
            <TopNavBar />
            <CategoryBar />
            <Row>
                <Col xs={14}></Col>
                <Col xs={10}>
                    <div style={cardHeader}>
                        <span style={{color: 'rgb(73, 36, 255)'}}>162</span> 개의 상품이 있습니다.
                    </div>
                </Col>
            </Row>
            <Divider style={divierMargin} />
            <ItemCard />
            <BottomNavBar />
        </AppLayout>
    );
}

export default Home;