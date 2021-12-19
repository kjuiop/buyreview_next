import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Input, Image } from 'antd';
import { MonitorOutlined } from '@ant-design/icons';

const wrapper = {
    padding : '15px'
}

const searchInputWrapper = {
    verticalAlign : 'middle',
    paddingTop : '5px',
}

const searchInput = {
    borderRadius: '20px',
    paddingLeft : '20px'
}

const { Search } = Input;

const suffix = (
    <MonitorOutlined
      style={{
        fontSize: 16,
        color: '#1890ff',
        paddingRight : '5px'
      }}
    />
  );

const AppLayout = ({ children }) => {
    return (
        <>
            <Row style={wrapper}>
                <Col xs={6} md={12}>
                    <Image
                        width={55}
                        src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
                    />
                </Col>
                <Col xs={18} md={12}
                    style={searchInputWrapper}
                >
                    <Input allowClear size='large'    
                    suffix={suffix} 
                    style={searchInput}
                    />
                </Col>
            </Row>
            {children}
        </>
    )
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default AppLayout;