import React from 'react';

const ChatBubble = ({ message }) => {
  // Obtener el nombre del remitente y destinatario del objeto de mensaje
  const senderName = message.sender_name || 'Unknown';
  const receiverName = message.received_name || 'Unknown';

  // Formatear la fecha y hora del mensaje
  const messageDate = new Date(message.message_date);
  const formattedDate = messageDate.toLocaleDateString('en-US');
  const formattedTime = messageDate.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
  });

  return (
    <div className="chat-bubble">
      <div className="sender-box">{senderName}</div>
      <div className="message-text">{message.message_text}</div>
      <div className="message-info">
        <span className="message-date">{formattedDate}</span>
        {' '}
        <span className="message-time">{formattedTime}</span>
      </div>
    </div>
  );
};

export default ChatBubble;