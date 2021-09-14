import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './FormMessage.module.scss';
// import Select from 'react-select';
import SelectUser from '../SelectUser/SelectUser'
import { userListInitialState } from '../UserList/UserList'

export const formMessageInitialState = {};

const FormMessage = (props) => {
  const [formMessageState, setFormMessagestate] = useState(formMessageInitialState);

  return (
    <div className={styles.FormMessage} data-testid="FormMessage">
      <SelectUser users={userListInitialState} />
      {/* <Select options={userListInitialState.map((e, i) => {
        var rObj = {};
        rObj.value = e.id; 
        rObj.label = e.nickname;
        return rObj;
      })} /> */}
    </div>
  );
}

FormMessage.propTypes = {};

FormMessage.defaultProps = {};

export default FormMessage;
