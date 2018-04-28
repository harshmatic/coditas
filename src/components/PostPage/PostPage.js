import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import api from '../../lib/api';

// Import can't be in conditional so use require.
if (process.env.WEBPACK) {
  require('./PostPage.css'); // eslint-disable-line global-require
}

export class PostPage extends Component {
  static propTypes = {
    post: PropTypes.object.isRequired
  }
  constructor(props) {
    super(props);
    this.state = {
      repos:[],
      collapse: false
    }
    this.fetchRepo = this.fetchRepo.bind(this);

  }
  fetchRepo(){
    api(' https://api.github.com/users/'+this.props.post.login+'/repos')
    .then(
      json => 
      {
        this.setState({collapse:true, repos:json.data.slice(0, 5)})
       
      }
    )
    
  }
  render() {
    var repos = this.state.repos;
    return (
      <div className="PostPage">
      <img src={this.props.post.avatar_url} width={50} />
        <h1 className="PostPage-title">{this.props.post.login}</h1>
        <p>&emsp;{this.props.post.html_url}</p>
        &emsp;<button onClick={this.fetchRepo}>{this.state.collapse}{this.state.collapse?'Collapse':'Details'}</button>
        {repos.length>0 ? <table>
          <tr>
            <th>Repo Name</th>
            <th> Repo Tech</th>
          </tr>
        {repos.map((repo, i) =>
        <tr>
        <td>{repo.name}</td>
        <td> Repo Tech</td>
      </tr>
        )}
        </table> : ''}
      </div>
    );
  }
}


export default PostPage;
