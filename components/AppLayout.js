import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Layout, Menu } from 'antd';
import { UnorderedListOutlined } from '@ant-design/icons';


const { Header, Footer, Content } = Layout;
const { SubMenu } = Menu;

const AppLayout = ({ children }) => {
    return (
        <>
            <Layout>
                <Menu mode='horizontal'>
                        <Menu.Item key="home">
                            <Link href="/"><a>바이리뷰</a></Link>
                        </Menu.Item>
                        <Menu.Item key="profile">
                            <Link href="/profile"><a>프로필</a></Link>
                        </Menu.Item>
                        <Menu.Item key="signup">
                            <Link href="/signup"><a>회원가입</a></Link>
                        </Menu.Item>
                </Menu>
                    {children}
            </Layout>
        </>
    )
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default AppLayout;