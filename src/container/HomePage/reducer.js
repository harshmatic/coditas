import {
    REQUEST_POSTS, RECEIVE_POSTS
  } from './action';
  
function Home (state = {
    isFetching: false,
    didInvalidate: false,
    searchString:'',
    posts: []
  }, action) {
    switch (action.type) {
      case REQUEST_POSTS:
        return {
          ...state,
          isFetching: true,
          didInvalidate: false,
          searchString:action.search,
        };
      case RECEIVE_POSTS:
        return {
          ...state,
          isFetching: false,
          didInvalidate: false,
          posts: action.posts,
          lastUpdated: action.receivedAt,
          searchString:action.search,
          total: action.total
        };
      default:
        return state;
    }
  };
  export default Home;