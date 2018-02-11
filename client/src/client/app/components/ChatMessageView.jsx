import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

function ChatMessageView({ message }) {
  return (
    <div className="chat-message">
      <div className="username">{message.username}</div>
      <div className="message-content">{message.message}</div>
    </div>
  );
}

ChatMessageView.propTypes = {
  message: PropTypes.shape({
    username: PropTypes.string,
    message: PropTypes.string,
  }).isRequired,
};

export default ChatMessageView;
