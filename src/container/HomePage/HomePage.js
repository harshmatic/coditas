import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPostsIfNeeded } from './action';
import Posts from '../../components/Posts/Posts';
import Header from '../../components/Header/Header';
export class HomePage extends Component {
  static propTypes = {
    isFetching: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired,
    posts: PropTypes.arrayOf(PropTypes.object.isRequired)
  }
  constructor(props) {
    super(props);
    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(e) {
    const { dispatch } = this.props;
    dispatch(fetchPostsIfNeeded(e.target.value));
  }
  
  render() {
    const { posts, isFetching, searchString, total } = this.props;
    const isEmpty = posts.length === 0;
    return (
      <div className="HomePage">
        <Header value={searchString} onChange={this.onSearch}/>
        <h3>Git Users</h3>
        {isEmpty
          ? (isFetching ? <h3>Loading...</h3> : <h4 className="HomePage-message">Empty :(</h4>)
          : <div style={{ opacity: isFetching ? 0.5 : 1,margin:'auto', width:'50%' }}>
            Total Results : {total}
            <Posts posts={posts} />
          </div>
        }
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  const { posts = [], isFetching = false, lastUpdated, searchString='',total } = state;
  return {
    posts,
    isFetching,
    lastUpdated,
    searchString,
    total
  };
};

export default connect(mapStateToProps)(HomePage);
