import React from 'react';
import PropTypes from 'prop-types';
import styles from './Chat.module.scss';
import FlexContainer from '../../components/FlexContainer/FlexContainer'
import FormMessage from '../../components/FormMessage/FormMessage'
import MessageList from '../../components/MessageList/MessageList'
import UserList from '../../components/UserList/UserList'

// page design 
const Chat = () => (
  <div className={styles.Chat} data-testid="Chat">
    <FlexContainer type="horizontal" style={{height:'98vh'}}>
      {/* partie superieur */}
      <FlexContainer type="vertical">
        <MessageList />
        <UserList />
      </FlexContainer>
      {/* partie inferieur */}
      <FormMessage />
    </FlexContainer>
  </div>
);

Chat.propTypes = {};

Chat.defaultProps = {};

export default Chat;
