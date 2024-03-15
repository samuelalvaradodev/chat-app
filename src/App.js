import React, { useState, useEffect } from 'react';
import ChatView from './components/ChatView';
import './style.css'; 

const App = () => {
  const [messages, setMessages] = useState([]);
 
  useEffect(() => {
    // Función para obtener los mensajes del endpoint
    const fetchMessages = async () => {
      try {
        const response = await fetch('http://www.dev.readychatai.com/messages_json');
        if (!response.ok) {
          throw new Error('Failed to fetch messages');
        }
        const data = await response.json();
        setMessages(data);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    // Llamar a la función para obtener los mensajes
    fetchMessages();
  }, []);

  // Agrupar mensajes por remitente y destinatario
  const groupedChats = {};
  messages.forEach(message => {
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
