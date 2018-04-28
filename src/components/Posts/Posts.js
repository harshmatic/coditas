import React from 'react';
import PropTypes from 'prop-types';
import PostPage from '../PostPage/PostPage';


const Posts = props => (
  <ul className="Posts">
    {props.posts.map((post, i) =>
     
        <PostPage key={post.id} post={post}/>
    )}
  </ul>
);

Posts.propTypes = {
  posts: PropTypes.array.isRequired
};

export default Posts;
