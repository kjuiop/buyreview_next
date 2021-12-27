import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { PlusOutlined } from '@ant-design/icons';

import ImagesZoom from './imagesZoom';


const PostImages = ({images}) => {

    const [showImagesZoom, setShowImagesZoom] = useState(false);
    
    const onZoom = useCallback(() => {
        setShowImagesZoom(true);
    }, []);

    const onClose = useCallback(() => {
        setShowImagesZoom(false);
    }, []);

    if (images.length === 1) {
        return (
            <>
                <img src={images[0].src} alt={images[0].src}
                    onClick={onZoom} role="presentation" style={{ maxHeight: '200px' }} />
                {showImagesZoom && <ImagesZoom images={images} onClose={onClose} /> }
            </>
        )
    }

    if (images.length === 2) {
        return(
            <>
            <div>
                <img src={images[0].src} alt={images[0].src}
                    onClick={onZoom} role="presentation" style={{width:"50%"}}
                />
                <img src={images[1].src} alt={images[1].src}
                    onClick={onZoom} role="presentation" style={{width:"50%"}}
                />
                {showImagesZoom && <ImagesZoom images={images} onClose={onClose} /> }
            </div>
            </>
        )
    }

    if (images.length >= 3) {
        return (
            <>
                <div>
                    <img src={images[0].src} alt={images[0].src} onClick={onZoom} role="presentation" width='50%'/>
                    {showImagesZoom && <ImagesZoom images={images} onClose={onClose} /> }
                    <div
                        role="presentation"
                        style={{ display: 'inline-block', width: '50%', textAlign: 'center', verticalAlign: 'middle'}}
                        onClick={onZoom}
                    >
                        <PlusOutlined />
                        <br />
                        {images.length - 1}
                        개의 사진 더보기
                    </div>
                </div>
            </>
        )
    }

}

PostImages.propTypes = {
    images: PropTypes.arrayOf(PropTypes.object),
}

export default PostImages;