import React from 'react';
// import { toggleChatBubble } from 'redux/actions/ui';
import { Avatar, message } from 'antd';
import styles from './ChatWindow.module.scss';
import { UserOutlined } from '@ant-design/icons';
import Button from '@material-ui/core/Button';
import UserAvatar from 'components/UserAvatar';
import _ from 'lodash';
import moment from 'moment';
import InputEmoji from 'components/EmojiInput';

export default function ChatWindow({
  messages,
  handleOpenLogin,
  handleSendMessage,
  input,
  handleTextChange,
  handleCloseChat,
  user,
  isAdmin,
  isOnline,
  roomInfo,
  handleClick,
}: any) {
  // @ts-ignore
  let lastSeenIndex: number;
  if (isAdmin && messages.length) {
    if (messages[messages.length - 1].sender === 'Admin') {
      // @ts-ignore
      lastSeenIndex = _.findLastIndex(messages, (message) => message.seen && message.sender === 'Admin');
    }
  } else if (!isAdmin && messages.length) {
    if (messages[messages.length - 1].sender !== 'Admin') {
      // @ts-ignore
      lastSeenIndex = _.findLastIndex(messages, (message) => message.seen && message.sender !== 'Admin');
    }
  }

  const renderTime = (i: number) => {
    if (i !== 0) {
      if (messages[i].createdAt - messages[i - 1].createdAt > 120000) {
        return (
          <div className={styles.time}>{moment(messages[i].createdAt).locale('vi').startOf('minute').fromNow()}</div>
        );
      }
    } else {
      return (
        <div className={styles.time}>{moment(messages[i].createdAt).locale('vi').startOf('minute').fromNow()}</div>
      );
    }
  };

  const renderChatMessages = () =>
    messages.map((item: any, i: number) => {
      if (item.type === 'text') {
        if (isAdmin) {
          return item.sender === 'Admin' ? (
            <div key={i}>
              {renderTime(i)}
              <div className={styles.normalText}>{item.message}</div>
              {lastSeenIndex === i && <div className={styles.seen}> ✓ Đã xem</div>}
            </div>
          ) : (
            <div key={i}>
              {renderTime(i)}
              <div className={styles.senderText}>{item.message}</div>
            </div>
          );
        } else {
          return item.sender === 'Admin' ? (
            <div key={i}>
              {renderTime(i)}
              <div className={styles.senderText}>{item.message}</div>
            </div>
          ) : (
            <div key={i}>
              {renderTime(i)}
              <div className={styles.normalText}>{item.message}</div>
              {lastSeenIndex === i && <div className={styles.seen}> ✓ Đã xem</div>}
            </div>
          );
        }
      }
    });
  return (
    <div className={styles.chatWrapper} onClick={handleClick}>
      <div className={styles.top}>
        <div className={styles.admin}>
          <div className={styles.leftAdmin}>
            {typeof roomInfo === 'boolean' ? (
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
            ) : (
              // @ts-ignore
              <UserAvatar userId={roomInfo.roomId} />
            )}

            <div className={styles.dot}></div>
          </div>
          <div className={styles.rightAdmin}>
            {typeof roomInfo === 'boolean' ? (
              <div className={styles.name}>Admin</div>
            ) : (
              <div className={styles.name}>{roomInfo.roomName}</div>
            )}
            {isOnline ? (
              <div className={styles.status}>online</div>
            ) : (
              <div className={styles.statusOffline}>offline</div>
            )}
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
                {/* <input
                  value={input}
                  onChange={handleTextChange}
                  type="text"
                  placeholder="Nhập tin nhắn"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleSendMessage();
                    }
                  }}
                /> */}
                {/* @ts-ignore */}
                <InputEmoji cleanOnEnter onEnter={handleSendMessage} placeholder="Nhập tin nhắn" />
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
