import React, { useCallback, useState } from 'react';
import { Form, Input, PageHeader, Radio, Button, Checkbox, Divider } from 'antd';
import styled from 'styled-components';
import useInput from '../hooks/useInput';

import LogoLayout from '../components/LogoLayout';

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

        console.log(username, password, name, gender, birth, term, marketing);


    }, [password, passwordCheck, term]);

    const onSubmitFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <LogoLayout>
            <PageHeader
                title="회원가입"
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
                    label="이메일 주소"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: '이메일 주소를 입력해주세요.',
                        },
                    ]}
                >
                    <Input type="text" name="username" value={username} required onChange={onChangeUsername}/>
                </Form.Item>

                <Form.Item
                    label="비밀번호"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: '비밀번호를 입력해주세요.',
                        },
                    ]}
                >
                    <Input type="password" name="password" value={password} required onChange={onChangePassword}/>
                </Form.Item>

                <Form.Item
                    label="비밀번호 확인"
                    name="passwordCheck"
                    rules={[
                        {
                            message: '비밀번호를 한번 더 입력해주세요.',
                        },
                    ]}
                >
                    <Input 
                        type="password"
                        name="passwordCheck" 
                        value={passwordCheck}
                        onChange={onChangePasswordCheck}
                    />
                    {passwordError && <div style={errorText}>비밀번호가 일치하지 않습니다.</div>}
                </Form.Item>

                <Form.Item
                    label="이름"
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
                    label="휴대폰 번호"
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
                    label="성별"
                    name="gender"
                    initialValue={'M'}
                >
                    <Radio.Group name="gender" onChange={onChangeGender}>
                        <Radio value={'M'}>남성</Radio>
                        <Radio value={'W'}>여성</Radio>
                    </Radio.Group>
                </Form.Item>

                <Form.Item
                    label="생년월일"
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
                        이용약관 및 개인정보처리방침에 동의합니다. (필수)
                    </Checkbox>
                    {termError && <div style={errorText}>약관에 동의하셔야 합니다.</div>}
                </Form.Item>

                <Form.Item
                    name="marketing"
                >
                    <Checkbox name="marketing" checked={marketing} onChange={onChangeMarketing} value="Y">
                        마케팅 수신에 동의합니다. (선택)
                    </Checkbox>
                </Form.Item>

                <Form.Item>
                    <Button type="primary"
                        htmlType="submit"
                        loading={false}
                        style={submitButton}
                    >
                        회원가입
                    </Button>
                </Form.Item>
            </Form>
        </LogoLayout>
    )
};

export default Signup;