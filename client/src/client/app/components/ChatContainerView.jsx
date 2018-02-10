import React from 'react';
import PropTypes from 'prop-types';
import ChatMessageView from './ChatMessageView';

function ChatContainerView({ messages }) {
  return (
    <div className="ChatContainerView">
        { console.log(messages) }
      {
        messages.map(message => <ChatMessageView message={message} />)
      }
    </div>
  );
}

ChatContainerView.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ChatContainerView;
