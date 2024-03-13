import React from 'react';
import ChatBubble from './ChatBubble';

const ChatView = ({ messages, senderNumber, receivedNumber }) => {
  const renderChatBubbles = () => {
    return messages.map(message => {
      return (
        <ChatBubble
          key={message.id}
          message={message}
          senderNumber={senderNumber}
          receivedNumber={receivedNumber}
        />
      );
    });
  };

  return (
    <div className="chat-view">
      <h2>Chat between {senderNumber} and {receivedNumber}</h2>
      <div className="chat-container">
        {renderChatBubbles()}
      </div>
    </div>
  );
};

export default ChatView;