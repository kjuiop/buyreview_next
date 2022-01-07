import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';

import { Card, Form, Input, Button, Popover, Avatar, List, Comment } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { EllipsisOutlined, HeartOutlined, MessageOutlined, RetweetOutlined, HeartTwoTone } from '@ant-design/icons';

import PostImages from './PostImages';
import CommentForm from './CommentForm';
import PostCardContent from './PostCardContent';
import { REMOVE_POST_REQUEST } from '../reducers/post';

const PostCard = ({ post }) => {

    const dispatch = useDispatch();

    const { removePostLoading } = useSelector((state) => state.post);

    const { me } = useSelector((state) => state.user);
    const id = me?.id;

    const [liked, setLiked] = useState(false);
    const [commentFormOpened, setCommentFormOpened] = useState(false);

    const onToggleLike = useCallback(() => {
        setLiked((prev) => !prev);
        
    }, []);
    const onToggleComment = useCallback(() => {
        setCommentFormOpened((prev) => !prev);
    });

    const onRemovePost = useCallback(() => {
        dispatch({
            type: REMOVE_POST_REQUEST, 
            data: post.id,
        })
    }, []);

    return (
        <div style={{ padding: '30px', marginBottom: '10px'}}>
            <Card
                cover={post.Images[0] && <PostImages images={post.Images} />}
                actions={[
                    <RetweetOutlined key="retweet" />,
                    liked
                        ? <HeartTwoTone twoToneColor="#eb2f96" key="heart" onClick={onToggleLike} />
                        : <HeartOutlined key="heart" onClick={onToggleLike} />,
                    <MessageOutlined key="comment" onClick={onToggleComment} />,
                    <Popover key="more" content={
                        <Button.Group>
                            {(id && post.User.id === id) 
                            ? (
                                <>
                                    <Button>수정</Button>
                                    <Button 
                                        type='danger' 
                                        onClick={onRemovePost}
                                        loading={removePostLoading}
                                    >삭제</Button>
                                </>
                            ) : 
                                <Button>신고</Button>
                            }
                        </Button.Group>
                    }>
                        <EllipsisOutlined />
                    </Popover>
                ]}
            >
                <Card.Meta 
                    avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
                    title={post.User.nickname}
                    description={<PostCardContent postData={post.content} />}
                />
            </Card>
            {commentFormOpened && (
                <div>
                    <CommentForm 
                        post={post}
                    />
                    <List 
                        header={`${post.Comments.length}개의 댓글`}
                        itemLayout='horizontal'
                        dataSource={post.Comments}
                        renderItem={(item) => (
                            <li>
                                <Comment 
                                    author={item.User.nickname}
                                    avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
                                    content={item.content}
                                />
                            </li>
                        )}
                    />
                </div>
            )}

        </div>
    )
}

// PostCard.propTypes = {
//     post: PropTypes.state({
//         id: PropTypes.number,
//         User: PropTypes.object,
//         content: PropTypes.string,
//         createdAt: PropTypes.object,
//         Comments: PropTypes.arrayOf(PropTypes.object),
//         Images: PropTypes.arrayOf(PropTypes.object),
//     }).isRequired,
// }

export default PostCard;