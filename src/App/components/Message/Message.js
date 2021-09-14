import React from 'react';
import PropTypes from 'prop-types';
import styles from './Message.module.scss';

const Message = (props) => (
  <div className={styles.Message} data-testid="Message">
    <img src={props.message.user.avatar}/>
    <div>
      <div className={styles.messageHeader}>DateTime: {props.message.dateTime}</div>
      {/* <div className={styles.messageSender}>{props.message.user.nickname}:</div> */}
      <div className={styles.message}>{props.message.text}</div>
      
    </div>
  </div>
);

Message.propTypes = {
  message: PropTypes.any
};

Message.defaultProps = {};

export default Message;
