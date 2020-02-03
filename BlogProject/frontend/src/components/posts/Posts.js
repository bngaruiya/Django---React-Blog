import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPosts, deletePost } from '../../actions/posts';

export class Posts extends Component {
  static propTypes = {
    posts: PropTypes.array.isRequired,
    getPosts: PropTypes.func.isRequired,
    deletePost: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    return (
      <Fragment>
        <div className='container'>
          {this.props.posts.map(post => (
            <div
              key={post.id}
              className='card text-white bg-secondary mb-3'
              style={{ maxWidth: '50rem' }}
            >
              <div className='card-header'>{post.date_posted}</div>
              <div className='card-body'>
                <h4 className='card-title'>{post.title}</h4>
                <p className='card-text'>{post.content}</p>
                <a href='#'>Read More...</a>
                <button
                  onClick={this.props.deletePost.bind(this, post.id)}
                  className='btn btn-danger btn-sm'
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts.posts
});

export default connect(mapStateToProps, { getPosts, deletePost })(Posts);
