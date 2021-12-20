import React, { useCallback, useRef, useState } from 'react';
import { Form, Input, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { addPost } from '../reducers/post';


const PostForm = () => {
    const dispatch = useDispatch();

    const imageInput = useRef();
    const { imagePaths } = useSelector((state) => state.post);
    const [ text, setText ] = useState('');
    const onChangeText = useCallback((g) => {
        setText(g.target.value);
    }, []);

    const onClickImageUpload = useCallback(() => {
        imageInput.current.click();
    }, [imageInput.current]);


    const onSubmit = useCallback(() => {
        dispatch(addPost);
        setText('');
    }, []);

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
                <Button type="primary" style={{ float: 'right'}} htmlType="submit">등록</Button>
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