import React, { useCallback, useState } from 'react';
import { Form, Input, PageHeader, Radio, Button, Checkbox, Divider } from 'antd';
import styled from 'styled-components';
import useInput from '../hooks/useInput';
import { useRouter } from 'next/router';
import LogoLayout from '../components/LogoLayout';
import { SIGN_UP_REQUEST } from '../reducers/user';
import { useDispatch, useSelector } from "react-redux";


const errorText = {
    color : 'red'
}

const formWrappper = {
    padding: '30px',
    paddingTop: '0px'
}

const submitButton = {
    width: '100%'
}

const Signup = () => {

    const dispatch = useDispatch();
    const { signUpLoading } = useSelector((state) => state.user);
    const router = useRouter();

    const [username, onChangeUsername] = useInput('');
    const [password, onChangePassword] = useInput('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const onChangePasswordCheck = useCallback((g) => {
        console.log("??", g.target.value);
        setPasswordCheck(g.target.value);
        setPasswordError(g.target.value !== password);
    }, [password]);

    const [name, onChangeName] = useInput('');
    const [mobile, onChangeMobile] = useInput('');
    const [gender, onChangeGender] = useInput('');
    const [birth, onChangeBirth] = useInput('');

    const [term, setTerm] = useState('');
    const onChangeTerm = useCallback((g) => {
        setTerm(g.target.checked);
        setTermError(false);
    }, []);
    const [termError, setTermError] = useState(false);

    const [marketing, setMarketing] = useState('');
    const onChangeMarketing = useCallback((g) => {
        setMarketing(g.target.checked);
    }, []);


    const onSubmit = useCallback((successInfo) => {
        console.log("successInfo", successInfo);

        if (password !== passwordCheck) {
            return setPasswordError(true);
        }

        if (!term) {
            return setTermError(true);
        }

        const param = {
            username : username,
            password : password,
            name : name,
            gender : gender,
            birth : birth,
            term : term,
            marketing : marketing,
        }

        console.log(param);
        dispatch(SIGN_UP_REQUEST(param));
        router.push('/');

    }, [password, passwordCheck, term]);

    const onSubmitFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <LogoLayout>
            <PageHeader
                title="????????????"
            />
            <Form
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                onFinish={onSubmit}
                onFinishFailed={onSubmitFailed}
                autoComplete="off"
                style={formWrappper}
            >
                <Form.Item
                    label="????????? ??????"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: '????????? ????????? ??????????????????.',
                        },
                    ]}
                >
                    <Input type="email" name="username" value={username} required onChange={onChangeUsername}/>
                </Form.Item>

                <Form.Item
                    label="????????????"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: '??????????????? ??????????????????.',
                        },
                    ]}
                >
                    <Input type="password" name="password" value={password} required onChange={onChangePassword}/>
                </Form.Item>

                <Form.Item
                    label="???????????? ??????"
                    name="passwordCheck"
                    rules={[
                        {
                            message: '??????????????? ?????? ??? ??????????????????.',
                        },
                    ]}
                >
                    <Input 
                        type="password"
                        name="passwordCheck" 
                        value={passwordCheck}
                        onChange={onChangePasswordCheck}
                    />
                    {passwordError && <div style={errorText}>??????????????? ???????????? ????????????.</div>}
                </Form.Item>

                <Form.Item
                    label="??????"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your name!',
                        },
                    ]}
                >
                    <Input type="text" name="name" value={name} required onChange={onChangeName} />
                </Form.Item>

                <Form.Item
                    label="????????? ??????"
                    name="mobile"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your mobile!',
                        },
                    ]}
                >
                    <Input type="text" name="mobile" value={mobile} required onChange={onChangeMobile} />
                </Form.Item>

                <Form.Item
                    label="??????"
                    name="gender"
                    initialValue={'M'}
                >
                    <Radio.Group name="gender" onChange={onChangeGender}>
                        <Radio value={'M'}>??????</Radio>
                        <Radio value={'W'}>??????</Radio>
                    </Radio.Group>
                </Form.Item>

                <Form.Item
                    label="????????????"
                    name="birth"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your birth!',
                        },
                    ]}
                >
                    <Input type="text" name="birth" value={birth} required onChange={onChangeBirth} />
                </Form.Item>

                <Divider />

                <Form.Item
                    name="term"
                >
                    <Checkbox name='term' checked={term} onChange={onChangeTerm} value="Y">
                        ???????????? ??? ??????????????????????????? ???????????????. (??????)
                    </Checkbox>
                    {termError && <div style={errorText}>????????? ??????????????? ?????????.</div>}
                </Form.Item>

                <Form.Item
                    name="marketing"
                >
                    <Checkbox name="marketing" checked={marketing} onChange={onChangeMarketing} value="Y">
                        ????????? ????????? ???????????????. (??????)
                    </Checkbox>
                </Form.Item>

                <Form.Item>
                    <Button type="primary"
                        htmlType="submit"
                        loading={signUpLoading}
                        style={submitButton}
                    >
                        ????????????
                    </Button>
                </Form.Item>
            </Form>
        </LogoLayout>
    )
};

export default Signup;