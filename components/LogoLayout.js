import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Input, Image } from 'antd';

const wrapper = {
    padding : '15px'
}

const LogoLayout = ({ children }) => {
    return (
        <>
            <Row style={wrapper}>
                <Col xs={6} md={12}>
                    <Image
                        width={55}
                        src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
                    />
                </Col>
                <Col xs={18} md={12} />
            </Row>
            {children}
        </>
    )
};

LogoLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default LogoLayout;