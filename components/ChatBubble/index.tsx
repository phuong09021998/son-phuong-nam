import React, { useState, useEffect, useRef } from 'react';
import styles from './ChatBubble.module.scss';
import { connect } from 'react-redux';
import { toggleChatBubble } from 'redux/actions/ui';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Button from '@material-ui/core/Button';
import { toggleRegisterLogin } from 'redux/actions/ui';
// @ts-ignore
import io from 'socket.io-client';
import scrollToBottom from 'components/utils/scrollBottom';

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
        roomId: user._id,
        message: input,
        sender: user.name,
        type: 'text',
        createdAt: Date.now(),
        seen: false,
      });
      // @ts-ignore
      setInput('');
    }
  };

  const renderChatMessages = () =>
    //@ts-ignore
    messages.map((item: any, i: number) => {
      if (item.type === 'text') {
        return item.sender === 'Admin' ? (
          <div className={styles.senderText} key={i}>
            {item.message}
          </div>
        ) : (
          <div className={styles.normalText} key={i}>
            {item.message}
          </div>
        );
      }
    });

  useEffect(() => {
    if (user) {
      socketRef.current = io('http://localhost:3000', { query: { roomId: user._id } });

      // @ts-ignore
      if (!messages.length) {
        // @ts-ignore
        socketRef.current.emit('Initialize Chat');
      }

      // @ts-ignore
      socketRef.current.on('Chat Message', (msg: any) => {
        // @ts-ignore
        setMessages((oldMessages) => [...oldMessages, msg]);
      });
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
        <div className={styles.chatWrapper}>
          <div className={styles.top}>
            <div className={styles.admin}>
              <div className={styles.leftAdmin}>
                <div className={styles.avatar}>
                  <Avatar
                    style={{
                      backgroundColor: '#e91e63',
                      width: '3rem',
                      height: '3rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.5rem',
                    }}
                    icon={<UserOutlined />}
                  />
                </div>
                <div className={styles.dot}></div>
              </div>
              <div className={styles.rightAdmin}>
                <div className={styles.name}>Admin</div>
                <div className={styles.status}>online</div>
              </div>
            </div>
            <div className={styles.close} onClick={handleCloseChat}>
              <img src="/icons/close-2.svg" alt="close" />
            </div>
          </div>
          {user ? (
            <>
              {' '}
              <div className={styles.middle} id="text">
                {messages && renderChatMessages()}
              </div>
              <div className={styles.bottom}>
                <div className={styles.inputWrapper}>
                  <div className={styles.input}>
                    <input
                      value={input}
                      onChange={handleTextChange}
                      type="text"
                      placeholder="Nhập tin nhắn"
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          handleSendMessage();
                        }
                      }}
                    />
                  </div>
                  <div className={styles.send}>
                    <img src="/icons/send.svg" alt="send" />
                  </div>
                </div>
                <div className={styles.attachWrapper}>
                  <div className={styles.attachItem}>
                    <img src="/icons/smile.svg" alt="smile" />
                  </div>
                  <div className={styles.attachItem}>
                    <img src="/icons/picture.svg" alt="pucture" />
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className={styles.requireLogin}>
              Bạn phải đăng nhập để chat!
              <Button style={{ backgroundColor: '#318fb5', color: 'white' }} onClick={handleOpenLogin}>
                Đăng nhập
              </Button>
            </div>
          )}
        </div>
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
