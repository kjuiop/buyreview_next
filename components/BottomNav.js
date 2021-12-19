import React, { useState } from 'react';

import Link from 'next/link';
import { Row, Col, Affix } from 'antd';
import { useSelector } from 'react-redux';

import { RedditOutlined, ArrowRightOutlined, CommentOutlined, UserOutlined, BarsOutlined } from '@ant-design/icons';

const wrapper = {
    weight: '100%',
    height: '70px',
    backgroundColor: 'white',
};

const navWrapper = {
    flexDirection: 'column',
    verticalAlign: 'middle',
    textAlign: 'center',
    padding: '15px',
    fontSize: '12px'
};

const colorBlack = {
    color: 'black'
};

const iconFontSize = {
    fontSize: '20px'
};

const BottomNavBar = ({ }) => {

    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
    

    return (
        <>
            <Affix offsetBottom={0}
            >
                <Row
                    style={wrapper}
                >
                    <Col xs={6}>
                        {isLoggedIn
                            ?
                            <>
                                <div style={navWrapper}>
                                    <div>
                                        <RedditOutlined style={iconFontSize} />
                                    </div>
                                    <Link href="/login"><a style={colorBlack}>내 켐페인</a></Link>
                                </div>
                            </>
                            :
                            <>
                                <div style={navWrapper}>
                                    <div>
                                        <ArrowRightOutlined style={iconFontSize} />
                                    </div>
                                    <Link href="/login"><a style={colorBlack}>로그인</a></Link>
                                </div>
                            </>
                        }
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