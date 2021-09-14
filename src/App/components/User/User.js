import React from 'react';
import PropTypes from 'prop-types';
import styles from './User.module.scss';

const User = (props) => (
  <div className={styles.User} data-testid="User">
      <img src={props.user.avatar}/>
      {/* <div className={styles.userId}>{props.user.id}</div> */}
      <div className={styles.userNickname}>{props.user.nickname}</div>
  </div>
);

User.propTypes = {};

User.defaultProps = {};

export default User;
