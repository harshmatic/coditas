import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Meta from 'react-helmet';
import { find } from 'lodash';

export class Details extends Component {
  static propTypes = {
    post: PropTypes.object.isRequired
  }
  constructor(props) {
    super(props);

  }
  render() {
    console.log(this.props)
    return (
      <div className="PostPage">
      <img src={this.props.post.avatar_url} width={50} />
        <h1 className="PostPage-title">{this.props.post.login}</h1>
        <p>{this.props.post.url}</p>
        <button id={this.props.post.id}>Details</button>
      </div>
    );
  }
}


export default PostPage;
