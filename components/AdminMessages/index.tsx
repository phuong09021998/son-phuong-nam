import React, { useEffect, useState, useRef } from 'react';
import { Dropdown } from 'antd';
import axios from 'config/axios';
import styles from './AdminMessages.module.scss';
import CircularProgress from '@material-ui/core/CircularProgress';
import UserAvatar from 'components/UserAvatar';
import Button from '@material-ui/core/Button';
import ModeCommentIcon from '@material-ui/icons/ModeComment';
import ChatWindow from '../ChatWindow';
import scrollToBottom from 'components/utils/scrollBottom';
// @ts-ignore
import io from 'socket.io-client';
import { toggleChatBubble } from 'redux/actions/ui';
import { connect } from 'react-redux';
import moment from 'moment';

function AdminMessages({ toggleChatBubble, openChatWindow }: any) {
  const [messages, setMessages] = useState([]);
  // const [isOnline, setOnline] = useState(false);
  const [currentMessages, setCurrentMessages] = useState([]);
  const [currentRoomInfo, setCurrentRoomInfo] = useState({
    roomName: '',
    roomId: '',
  });
  const [input, setInput] = useState('');
  const socketRef = useRef();
  const [activeUsers, setActiveUsers] = useState();

  const sortMessages = (messages: any) => {
    return messages.sort((a: any, b: any) => {
      return b.createdAt - a.createdAt;
    });
  };

  useEffect(() => {
    socketRef.current = io();
    // @ts-ignore
    socketRef.current.emit('Login', { userId: 'Admin' });

    axios.get('/messages/admin').then((res) => {
      if (res.data.lastChatMessages.length) {
        // setMessages(res.data.lastChatMessages);
        setMessages(sortMessages(res.data.lastChatMessages));
      } else {
        // @ts-ignore
        setMessages(null);
      }
    });
    // @ts-ignore
    socketRef.current.on('Chat Message', (data: any) => {
      // @ts-ignore
      setCurrentMessages((oldMessages) => [...oldMessages, data]);
    });

    // @ts-ignore
    socketRef.current.on('Admin Last Messages', (data: any) => {
      // @ts-ignore
      const newMessages = messages.map((message: any) => {
        if (message.roomId === data.roomId) {
          return data;
        } else {
          return message;
        }
      });
      // console.log(newMessages);
      setMessages(sortMessages(newMessages));
    });

    // @ts-ignore
    socketRef.current.on('Active Users', (data) => {
      const dataArr = Object.values(data);
      // @ts-ignore
      setActiveUsers(dataArr);
    });
  }, []);

  const handleCloseChat = () => {
    toggleChatBubble(false);
  };

  useEffect(() => {
    if (openChatWindow) {
      scrollToBottom();
    }
  }, [currentMessages, openChatWindow]);

  const handleOpenWindowChat = (roomId: string) => {
    axios.post('/messages', { roomId }).then((res) => {
      // @ts-ignore
      socketRef.current.emit('Join room', { roomId: res.data.messages[0].roomId });
      setCurrentMessages(res.data.messages);
      setCurrentRoomInfo({
        roomId: res.data.messages[0].roomId,
        roomName: res.data.messages[0].roomName,
      });
      toggleChatBubble(false);
      toggleChatBubble(true);
    });
  };

  const handleSendMessage = () => {
    // @ts-ignore
    socketRef.current.emit('Chat Message', {
      data: {
        roomId: currentRoomInfo.roomId,
        message: input,
        sender: 'Admin',
        type: 'text',
        createdAt: Date.now(),
        roomName: currentRoomInfo.roomName,
      },
      roomId: currentRoomInfo.roomId,
    });

    setInput('');
  };

  const handleTextChange = (e: any) => {
    setInput(e.target.value);
  };

  const messageDropdown = () => {
    if (messages === null) {
      return (
        <div className={styles.messagesWrapper}>
          <div className={styles.noMessage}>Không có tin nhắn nào</div>
        </div>
      );
    } else if (!messages.length) {
      return (
        <div className={styles.messagesWrapper}>
          <div className={styles.loading}>
            <CircularProgress color="secondary" size={25} />
          </div>
        </div>
      );
    } else {
      return (
        <div className={styles.messagesWrapper}>
          {messages.map((message: any, i) => (
            <div className={styles.messageItem} key={i} onClick={() => handleOpenWindowChat(message.roomId)}>
              <div className={styles.avatar}>
                {/* @ts-ignore */}
                <UserAvatar userId={message.roomId} key={i} />
              </div>
              <div className={styles.middleMessage}>
                <div className={styles.name}>{message.roomName}</div>
                {/* @ts-ignore */}
                <div className={styles.message} style={message.seen ? { color: 'gray' } : null}>
                  {message.sender === 'Admin' ? 'Bạn: ' : `${message.sender}: `}
                  {message.message}
                </div>
              </div>
              <div className={styles.rightMessage}>{moment(message.createdAt).startOf('minute').fromNow()}</div>
            </div>
          ))}
        </div>
      );
    }
  };
  return (
    <>
      <Dropdown overlay={messageDropdown} placement="bottomCenter" trigger={['click']}>
        <Button>
          <div className={styles.topItem}>
            <ModeCommentIcon />
          </div>
        </Button>
      </Dropdown>
      {openChatWindow && (
        <ChatWindow
          user={true}
          roomInfo={currentRoomInfo}
          handleSendMessage={handleSendMessage}
          input={input}
          handleTextChange={handleTextChange}
          handleCloseChat={handleCloseChat}
          messages={currentMessages}
          isAdmin={true}
          // @ts-ignore
          isOnline={activeUsers.includes(currentMessages[0].roomId)}
        />
      )}
    </>
  );
}

const mapStateToProps = (state: any) => ({
  openChatWindow: state.ui.openChatBubble,
});

export default connect(mapStateToProps, { toggleChatBubble })(AdminMessages);
