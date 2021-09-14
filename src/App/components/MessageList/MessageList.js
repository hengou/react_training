import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './MessageList.module.scss';
import Message from '../Message/Message'

export const messageListInitialState = [
  {
    id: 0,
    text: 'hello',
    dateTime: new Date().toString(),
    user: {
      id: 0,
      nickname: 'heng',
      avatar: '/img/user.png'
    }
  },
  {
    id: 1,
    text: 'yes',
    dateTime: new Date().toString(),
    user: {
      id: 1,
      nickname: 'admin',
      avatar: '/img/admin.png'
    }
  },
  {
    id: 2,
    text: 'question',
    dateTime: new Date().toString(),
    user: {
      id: 0,
      nickname: 'heng',
      avatar: '/img/user.png'
    }
  }
];

const MessageList = (props) => {
  const [messageListState, setMessageListstate] = useState(messageListInitialState);

  return (
    <div className={styles.MessageList} data-testid="MessageList">
      MessageList
      <div style={{height:'50%', overflowY:'scroll'}}>
      {
        messageListState.map((e,i)=>{
          return <Message message={e} key={`mess-${i}`}/>
        })
      }
      {/* {JSON.stringify(messageListState)} */}
      </div>
    </div>
  );
}

MessageList.propTypes = {};

MessageList.defaultProps = {};

export default MessageList;
