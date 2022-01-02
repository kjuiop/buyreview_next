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
        }, 
        {
            src: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg'
        }, 
        {
            src: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg'
        }
        ],
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
    addPostLoading: false,
    addPostDone: false,
    addPostError: null,
    addCommentLoading: false,
    addCommentDone: false,
    addCommentError: null,
}

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

export const addPost = (data) => ({
    type: ADD_POST_REQUEST,
    data,
});

export const addComment = (data) => ({
    type: ADD_COMMENT_REQUEST,
    data,
});

const dummyPost = (data) => ({
    id: 2,
    content: data,
    User: {
        id: 1,
        nickname: '제로초'
    },
    Images: [],
    Comments: [],
    commentLoading: false,
    commentDone: false,
    commentError: null,
});

const reducer = (state = initialState, action) => {
    console.log("ADD_POST_REDUCER");
    switch (action.type) {
        case ADD_POST_REQUEST:
            return {
                ...state,
                addPostLoading: true,
                addPostDone: false,
                addPostError: null,
            };
        case ADD_POST_SUCCESS:
            return {
                ...state,
                mainPosts: [dummyPost(action.data), ...state.mainPosts],
                addPostLoading: false,
                addPostDone: true,
            };   
        case ADD_POST_FAILURE:
            return {
            ...state,
            addPostLoading: false,
            addPostError: action.error,
            };
        case ADD_COMMENT_REQUEST:
            return {
            ...state,
            commentLoading: true,
            commentDone: false,
            commentError: null,
            };
        case ADD_COMMENT_SUCCESS:
            return {
                ...state,
                mainPosts: [dummyPost, ...state.mainPosts],
                commentLoading: false,
                commentDone: true,
            };   
        case ADD_COMMENT_FAILURE:
            return {
            ...state,
            commentLoading: false,
            commentError: action.error,
            };
        default:
            return state;
    }
};

export default reducer;