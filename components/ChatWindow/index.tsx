import React from 'react';
// import { toggleChatBubble } from 'redux/actions/ui';
import { Avatar } from 'antd';
import styles from './ChatWindow.module.scss';
import { UserOutlined } from '@ant-design/icons';
import Button from '@material-ui/core/Button';

export default function ChatWindow({
  messages,
  handleOpenLogin,
  handleSendMessage,
  input,
  handleTextChange,
  handleCloseChat,
  user,
  isAdmin,
}: any) {
  const renderChatMessages = () =>
    //@ts-ignore
    messages.map((item: any, i: number) => {
      if (item.type === 'text') {
        if (isAdmin) {
          return item.sender === 'Admin' ? (
            <div className={styles.normalText} key={i}>
              {item.message}
            </div>
          ) : (
            <div className={styles.senderText} key={i}>
              {item.message}
            </div>
          );
        } else {
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
      }
    });
  return (
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
              <div className={styles.send} onClick={handleSendMessage}>
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
  );
}
