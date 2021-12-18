import React from 'react';

import Link from 'next/link';
import { Menu } from 'antd';

const navText = {
    fontSize : '15px',
    fontWeight : 'bold'
}

const TopNavBar = ({}) => {
    return (
        <>
            <Menu mode='horizontal'>
                <Menu.Item key="home">
                    <Link href="/">
                        <a style={navText}>추첨형</a>
                    </Link>
                </Menu.Item>
                <Menu.Item key="profile">
                    <Link href="/profile">
                        <a style={navText}>선착순</a>
                    </Link>
                </Menu.Item>
                <Menu.Item key="auction">
                    <Link href="/auction">
                        <a style={navText}>옥션형</a>
                    </Link>
                </Menu.Item>
                <Menu.Item key="blog">
                    <Link href="/blog">
                        <a style={navText}>블로그</a>
                    </Link>
                </Menu.Item>
            </Menu>
        </>
    )
};

export default TopNavBar;