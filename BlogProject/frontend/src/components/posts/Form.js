import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addPost } from '../../actions/posts';

export class Form extends Component {
  state = {
    title: '',
    content: '',
    imageUrl: ''
  };

  static propTypes = {
    addPost: PropTypes.func.isRequired
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    const { title, content, imageUrl } = this.state;
    const post = { title, content, imageUrl };
    this.props.addPost(post);
  };

  render() {
    const { title, content, imageUrl } = this.state;
    return (
      <div>
        <div className='card card-body mt-4 mb-4'>
          <h2>Add Post</h2>
          <form onSubmit={this.onSubmit}>
            <div className='form-group'>
              <label>Title</label>
              <input
                className='form-control'
                type='text'
                name='title'
                onChange={this.onChange}
                value={title}
              />
            </div>
            <div className='form-group'>
              <label>Content</label>
              <input
                className='form-control'
                type='text'
                name='content'
                onChange={this.onChange}
                value={content}
              />
            </div>
            <div className='form-group'>
              <label>Image Link</label>
              <input
                className='form-control'
                type='text'
                name='imageUrl'
                onChange={this.onChange}
                value={imageUrl}
              />
            </div>
            <div className='form-group'>
              <button type='submit' className='btn btn-primary'>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(null, { addPost })(Form);
