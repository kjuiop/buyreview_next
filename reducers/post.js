export const initialState = {
    mainPosts: [{
        id: 1,
        content: '첫번째 게시글 #해시태그 #익스프레스',
        User: {
            id: 1,
            nickname: '제로초'
        },
        Images: [{
            src: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg'
        }, {
            src: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg'
        }, {
            src: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg'
        }],
        Comments: [
            {
                User: {
                    nickname: 'nero'
                },
                content: '우와 개정판이 나왔냐오'
            }, {
                User: {
                    nickname: 'hoho'
                },
                content: 'ㅎㅎㅎㅎ 진짜루우?'
            }
        ]}],
    imagePaths: [],
    postAdded: false,
}

const ADD_POST = 'ADD_POST';
export const addPost = {
    type: ADD_POST,
}

const dummyPost = {
    id: 2,
    content: '더미 데이터입니다.',
    User: {
        id: 1,
        nickname: '제로초'
    },
    Images: [],
    Comments: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
        return {
            ...state,
            mainPosts: [dummyPost, ...state.mainPosts],
            postAdded: true,
        }        
        default:
            return state;
    }
};

export default reducer;