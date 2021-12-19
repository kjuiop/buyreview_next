export const initialState = {
    mainPromotions: [{
        id: 1,
        content: '첫번째 게시글 #해시태그 #익스프레스',
        Partner: {
            id: 1,
            businessName: '올리브영'
        },
        Images: [{
            src: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg'
        }, {
            src: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg'
        }, {
            src: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg'
        }]
    }],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default reducer;