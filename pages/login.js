import React, { useCallback } from "react";
import { Form, Input, Button, Checkbox, Row, Col, PageHeader, Affix, Image } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import PropTypes from 'prop-types';

import useInput from '../hooks/useInput';
import { useRouter } from 'next/router';

import { useDispatch, useSelector } from "react-redux";
import { loginRequestAction } from '../reducers/user';


const wrapper = {
}

const pageHeader = {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
}

const loginFormWrapper = {
    padding: 30
}

const loginFormStyle = {
    maxWidth: 300,
    margin: '0 auto'
}

const floatRight = {
    float: 'right'
}

const loginButton = {
    width: '100%'
}

const divider = {
    marginTop : '10px'
}

const boldText = {
    fontWeight: 'bold'
}

const loginForm = ({ }) => {

    const dispatch = useDispatch();
    const router = useRouter();

    const { logInLoading } = useSelector((state) => state.user)
    const [username, onChangeUsername] = useInput('');
    const [password, onChangePassword] = useInput('');

    const onSubmitForm = useCallback(() => {
        console.log(username, password);
        const me = {
            username: username,
            password: password,
        }
        dispatch(loginRequestAction(me));
        // location.href = '/';
        router.push('/');
    }, [username, password]);

    return (
        <>
            <Affix offsetTop={100}
                    onChange={affixed => console.log(affixed)}
                >
                    <div style={wrapper}>
                        <Row style={loginFormWrapper}>
                            <Col xs={24}>
                                <PageHeader
                                    style={pageHeader}
                                >
                                    <Row>
                                        <Col xs={8}></Col>
                                        <Col xs={8} style={{ textAlign: 'center' }}>
                                            <Image
                                                width={55}
                                                src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
                                            />
                                        </Col>
                                        <Col xs={8}></Col>
                                    </Row>
                                </PageHeader>
                            </Col>
                            <Col xs={24}>
                                <Form
                                    name="normal_login"
                                    onFinish={onSubmitForm}
                                    style={loginFormStyle}
                                    initialValues={{ remember: true }}
                                >
                                    <Form.Item
                                        name="username"
                                        value={username}
                                        onChange={onChangeUsername}
                                        rules={[{ required: true, message: 'Please input your Username!' }]}
                                    >
                                        <Input type="email" 
                                               prefix={<UserOutlined 
                                               className="site-form-item-icon" />} placeholder="????????? ??????" />
                                    </Form.Item>
                                    <Form.Item
                                        name="password"
                                        type="password"
                                        value={password}
                                        onChange={onChangePassword}
                                        rules={[{ required: true, message: 'Please input your Password!' }]}
                                    >
                                        <Input
                                            prefix={<LockOutlined className="site-form-item-icon" />}
                                            type="password"
                                            placeholder="????????????"
                                        />
                                    </Form.Item>
                                    <Form.Item style={{ marginBottom: 0 }}>
                                        <Form.Item name="remember" valuePropName="checked" noStyle>
                                            <Checkbox>Remember me</Checkbox>
                                        </Form.Item>
                                        <a style={floatRight} href="">
                                            ??????????????? ????????????????
                                        </a>
                                    </Form.Item>
                                    <Form.Item>
                                        <Button
                                            type="primary"
                                            htmlType="submit"
                                            loading={logInLoading}
                                            style={loginButton}
                                        >
                                            Log in
                                        </Button>
                                        <div style={divider}>
                                            ?????? ????????? ????????????????&nbsp;
                                            <a href="/signup">????????????</a>
                                        </div>
                                    </Form.Item>
                                </Form>
                            </Col>
                        </Row>
                    </div>
                </Affix>
        </>
    )
}


export default loginForm;