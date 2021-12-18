import React from 'react';
import { Button, Row, Col } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

const wrapper = {
    marginTop : '15px',
    marginBottom : '15px',
    padding : '10px'
}

const buttonStyle = {
    marginRight : '8px',
    borderColor : 'blue',
    color: 'blue'
}

const CategoryBar = ({}) => {
    return (
        <>
            <Row>
                <Col xs={24}>
                    <div style={wrapper}>
                        <Button shape="round" style={buttonStyle}>전체보기</Button>
                        <Button shape="round" style={buttonStyle}>화장품/미용</Button>
                        <Button shape="round" style={buttonStyle}>패션잡화</Button>
                        <Button shape="round" style={buttonStyle}>식품</Button>
                    </div>
                </Col>
            </Row>
        </>
    );
}

export default CategoryBar;