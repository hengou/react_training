import React from 'react';
import PropTypes from 'prop-types';
import styles from './Chat.module.scss';
import FlexContainer from '../../components/FlexContainer/FlexContainer'
import FormMessage from '../../components/FormMessage/FormMessage'
import MessageList from '../../components/MessageList/MessageList'
import UserList from '../../components/UserList/UserList'

// page design 
const Chat = (props) => (
  <div className={styles.Chat} data-testid="Chat">
    <FlexContainer type="horizontal" style={{height:'98vh'}}>
      {/* partie superieur */}
      <FlexContainer type="vertical">
        <MessageList messages={props.messages}/>
        <UserList users={props.users}/>
      </FlexContainer>
      {/* partie inferieur */}
      <FormMessage users={props.users}/>
    </FlexContainer>
  </div>
);

Chat.propTypes = {users:[], messages:[]};

Chat.defaultProps = {};

export default Chat;
