import api from '../../lib/api';

export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const REQUEST_POST = 'REQUEST_POST';
export const RECEIVE_POST = 'RECEIVE_POST';

export const requestPosts = () => ({
  type: REQUEST_POSTS
});

export const receivePosts = (json,search) => {
  return {
  
  type: RECEIVE_POSTS,
  total:json.data.total_count,
  posts: json.data.items.slice(0, 10).map(child => child) || [],
  receivedAt: Date.now(),
  search
}};


export const fetchPosts = (search) => (
  dispatch => api('https://api.github.com/search/users?q='+search)
    .then(
      json => dispatch(receivePosts(json,search)),
    )
);

const shouldFetchPosts = () => {
  const posts = false;
  if (!posts) {
    return true;
  }
  if (posts.isFetching) {
    return false;
  }
  return posts.didInvalidate;
};

export const fetchPostsIfNeeded = (search) => (
  (dispatch, getState) => {
    if (shouldFetchPosts(getState())) {
      dispatch(fetchPosts(search));
    }
  }
);
