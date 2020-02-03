import React, { Component, Fragment } from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class Alerts extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired
  };
  componentDidUpdate(prevProps) {
    const { error, alert, message } = this.props;
    if (error !== prevProps.error) {
      if (error.msg.title) {
        alert.error(`Title: ${error.msg.title.join()}`);
      }
      if (error.msg.content) {
        alert.error(`Content: ${error.msg.content.join()}`);
      }
      if (error.msg.imageUrl) {
        alert.error(`Image Link: ${error.msg.imageUrl.join()}`);
      }
    }
    if (message !== prevProps.message) {
      if (message.deletePost) alert.success(message.deletePost);
      if (message.addPost) alert.success(message.addPost);
    }
  }
  render() {
    return <Fragment></Fragment>;
  }
}

const mapStateToProps = state => ({
  error: state.errors,
  message: state.messages
});

export default connect(mapStateToProps)(withAlert()(Alerts));
