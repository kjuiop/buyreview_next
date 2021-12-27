import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

const PostCardContent = ({ postData }) => {
    return (
        <div>
            {postData.split(/(#[^ \s#]+)/g).map((y, i) => {
                if (y.match(/(#[^ \s#]+)/g)) {
                    return <Link href={`/hashtag/${y.slice(1)}`} key={i}><a>{y}</a></Link>
                }
                return y;
            })}
        </div>
    )
};

PostCardContent.propTypes = {
    postData: PropTypes.string.isRequired
};

export default PostCardContent;