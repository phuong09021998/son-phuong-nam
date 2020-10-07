import React, { useState, useEffect, useRef } from 'react';
import styles from './ChatBubble.module.scss';
import { connect } from 'react-redux';
import { toggleChatBubble } from 'redux/actions/ui';
import { toggleRegisterLogin } from 'redux/actions/ui';
import ChatWindow from '../ChatWindow';
// @ts-ignore
import io from 'socket.io-client';
import scrollToBottom from 'components/utils/scrollBottom';
import { message } from 'antd';
import axios from 'config/axios';

function ChatBubble({ openChatBubble, toggleChatBubble, user, toggleRegisterLogin }: any) {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const socketRef = useRef();

  const handleOpenChat = () => {
    toggleChatBubble(true);
  };

  const handleCloseChat = () => {
    toggleChatBubble(false);
  };

  const handleTextChange = (e: any) => {
    setInput(e.target.value);
  };

  const handleOpenLogin = () => {
    toggleRegisterLogin(true, 'login');
  };

  const handleSendMessage = () => {
    if (input) {
      // @ts-ignore
      socketRef.current.emit('Chat Message', {
        data: {
          roomId: user._id,
          message: input,
          sender: user.name,
          type: 'text',
          createdAt: Date.now(),
          roomName: user.name,
        },
        roomId: user._id,
      });
      // @ts-ignore
      setInput('');
    }
  };

  useEffect(() => {
    if (user) {
      socketRef.current = io();
      // @ts-ignore
      socketRef.current.emit('Join room', { roomId: user._id });

      try {
        axios.post('/messages', { roomId: user._id }).then((res) => {
          if (res.data.messages.length) {
            setMessages(res.data.messages);
            // console.log(res.data.messages);
          } else {
            // @ts-ignore
            setMessages([]);
            // @ts-ignore
            socketRef.current.emit('Initialize Chat');
          }
        });
      } catch (error) {
        message.error(error.response.error);
      }

      // @ts-ignore
      socketRef.current.on('Chat Message', (msg: any) => {
        // @ts-ignore
        setMessages((oldMessages) => [...oldMessages, msg]);
      });
      // @ts-ignore
      socketRef.current.on('Chat Error', (err: any) => {
        message.error(err.response);
      });
    } else {
      toggleChatBubble(false);
    }
  }, [user]);

  useEffect(() => {
    if (openChatBubble) {
      scrollToBottom();
    }
  }, [messages, openChatBubble]);

  return (
    <React.Fragment>
      {openChatBubble ? (
        <ChatWindow
          user={user}
          handleOpenLogin={handleOpenLogin}
          handleSendMessage={handleSendMessage}
          input={input}
          handleTextChange={handleTextChange}
          handleCloseChat={handleCloseChat}
          messages={messages}
        />
      ) : (
        <div className={styles.icon} onClick={handleOpenChat}>
          <img src="/icons/chat.svg" alt="chat" />
        </div>
      )}
    </React.Fragment>
  );
}

const mapStateToProps = (state: any) => ({
  openChatBubble: state.ui.openChatBubble,
  user: state.users.data,
});

export default connect(mapStateToProps, { toggleChatBubble, toggleRegisterLogin })(ChatBubble);
