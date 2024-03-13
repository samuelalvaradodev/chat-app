import React from 'react';
import ChatView from './components/ChatView';
import messagesData from './data/messages.json';
import './style.css'; 

const App = () => {
  // Agrupar mensajes por remitente y destinatario
  const groupedChats = {};
  messagesData.forEach(message => {
    const sender = message.sender_number;
    const receiver = message.received_number;
    const key = `${sender}_${receiver}`;
    if (!groupedChats[key]) {
      groupedChats[key] = [];
    }
    groupedChats[key].push(message);
  });

  // Crear vistas de chat para cada grupo
  const chatViews = Object.entries(groupedChats).map(([key, messages]) => {
    const [senderNumber, receivedNumber] = key.split('_');
    return (
      <ChatView
        key={key}
        messages={messages}
        senderNumber={senderNumber}
        receivedNumber={receivedNumber}
      />
    );
  });

  return (
    <div className="app">
      {chatViews}
    </div>
  );
};

export default App;