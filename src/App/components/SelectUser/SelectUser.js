import React from 'react';
import PropTypes from 'prop-types';
import styles from './SelectUser.module.scss';

const SelectUser = (props) => (
  <select className={styles.SelectUser} data-testid="SelectUser" onChange={props.onChange} value={props.value}>
    {/* key used technically by react */}
    {props.users.map((e, i) => <option value={e.id} key={'opt-sur-' + i}>{e.nickname}</option>)}
  </select>
);

SelectUser.propTypes = {
  users: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
};

SelectUser.defaultProps = {
  onChange: ()=>{},
};

export default SelectUser;
