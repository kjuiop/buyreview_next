import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Form, Input, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { addPostDone, addPost } from '../reducers/post';
import useInput from '../hooks/useInput';


const PostForm = () => {
    const dispatch = useDispatch();

    const imageInput = useRef();
    const { imagePaths } = useSelector((state) => state.post);
    const onClickImageUpload = useCallback(() => {
        imageInput.current.click();
    }, [imageInput.current]);


    const [ text, onChangeText, setText ] = useInput('');
    useEffect(() => {
        if (addPostDone) {
            setText('');
        }
    }, [addPostDone]);

    const onSubmit = useCallback(() => {
        dispatch(addPost(text));
    }, [text]);

    return (
        <Form 
            style={{ margin: '10px 0 20px', padding: '30px'}} 
            encType="multipart/form-data" 
            onFinish={onSubmit}
        >
            <Input.TextArea 
                value={text}
                onChange={onChangeText}
                maxLength={140}
                placeholder="어떤 신기한 일이 있었나요?"
            />
            <div style={{ marginTop: '15px'}}>
                <input type="file" multiple hidden ref={imageInput}/>
                <Button onClick={onClickImageUpload}>이미지 업로드</Button>
                <Button 
                    type="primary" 
                    style={{ float: 'right'}} 
                    htmlType="submit"
                >등록</Button>
            </div>
            <div>
                {imagePaths.map((y) => {
                    <div key={y} style={{ display: 'inline-block' }}>
                        <img src={y} style={{ width: '200px' }} alt={y} />
                        <div>
                            <Button>제거</Button>
                        </div>
                    </div>
                })}
            </div>
        </Form>
    )
}

export default PostForm;