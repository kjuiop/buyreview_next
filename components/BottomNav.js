import React from 'react';

import Link from 'next/link';
import { Row, Col, Affix } from 'antd';

import { ArrowRightOutlined, CommentOutlined, UserOutlined, BarsOutlined } from '@ant-design/icons';

const wrapper = {
    height: '70px',
    backgroundColor: 'white',
};

const navWrapper = {
    flexDirection: 'column',
    verticalAlign: 'middle',
    textAlign : 'center',
    padding : '15px',
    fontSize : '12px'
};

const colorBlack = {
    color: 'black'
};

const iconFontSize = {
    fontSize : '20px'
};

const BottomNavBar = ({ }) => {
    return (
        <>
            <Affix offsetBottom={0}
                onChange={affixed => console.log(affixed)}
            >
                <Row
                    style={wrapper}
                >
                    <Col xs={6}>
                        <div style={navWrapper}>
                            <div>
                                <ArrowRightOutlined style={iconFontSize} />
                            </div>
                            <Link href="/login"><a style={colorBlack}>로그인</a></Link>
                        </div>
                    </Col>
                    <Col xs={6}>
                        <div style={navWrapper}>
                            <div>
                                <CommentOutlined style={iconFontSize} />
                            </div>
                            <Link href="/profile"><a style={colorBlack}>문의하기</a></Link>
                        </div>
                    </Col>
                    <Col xs={6}>
                        <div style={navWrapper}>
                            <div>
                                <UserOutlined style={iconFontSize} />
                            </div>
                            <Link href="/auction"><a style={colorBlack}>내정보</a></Link>
                        </div>
                    </Col>
                    <Col xs={6}>
                        <div style={navWrapper}>
                            <div>
                                <BarsOutlined style={iconFontSize} />
                            </div>
                            <Link href="/blog">
                                <a style={colorBlack}>더보기</a>
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Affix >
        </> 
    ) 
}; 

export default BottomNavBar; 