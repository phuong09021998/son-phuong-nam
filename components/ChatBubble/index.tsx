import React from 'react';
import styles from './ChatBubble.module.scss';

export default function ChatBubble() {
  return (
    <React.Fragment>
      <div className={styles.icon}>
        <img src="/icons/chat.svg" alt="chat" />
      </div>
    </React.Fragment>
  );
}
