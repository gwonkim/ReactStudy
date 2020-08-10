export const initialState = { //초기state
    mainPosts: [{
      id: 1,
      User: {
        id: 1,
        nickname: '제로초',
      },
      content: '첫 번째 게시글',
      Images: [{
        src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726',
      }, {
        src: 'https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg',
      }, {
        src: 'https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg',
      }],
      Comments: [{
        User: {
          nickname: 'one',
        },
        content: '우와~',
      }, {
        User: {
          nickname: 'two',
        },
        content: '와~',
      }]
    }],
    imagePaths: [],
    postAdded: false,
  };
  
  const ADD_POST = 'ADD_POST'; //액션이름 
   
  export const addPost = { //액션
    type: ADD_POST,
  };
  
  const dummyPost = {
    id: 2,
    content: '더미데이터입니다.',
    User: {
      id: 1,
      nickname: '제로초',
    },
    Images: [],
    Comments: [],
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case ADD_POST: {
        return {
          ...state,
          mainPosts: [dummyPost, ...state.mainPosts],
          postAdded: true,
        };
      }
      default: {
        return {
          ...state,
        };
      }
    }
  };