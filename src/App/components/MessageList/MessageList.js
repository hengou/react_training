import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './MessageList.module.scss';

export const messageListState = {};

const MessageList = (props) => {
  const [messageListState, setMessageListstate] = useState(messageListState);
  
  return (
    <div className={styles.MessageList} data-testid="MessageList">
      MessageList Component
      {JSON.stringify(messageListState)}
    </div>
  );
}

MessageList.propTypes = {};

MessageList.defaultProps = {};

export default MessageList;
