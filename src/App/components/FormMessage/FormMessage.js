import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './FormMessage.module.scss';
// import Select from 'react-select';
import SelectUser from '../SelectUser/SelectUser'
import { userListInitialState } from '../UserList/UserList'
import MessageInput from '../MessageInput/MessageInput'
import Button from '../Button/Button';

export const formMessageInitialState = {
  text: 'new message',
  destId: 0
};

const FormMessage = (props) => {
  const [formMessageState, setFormMessagestate] = useState(formMessageInitialState);

  return (
    <div className={styles.FormMessage} data-testid="FormMessage">
      {JSON.stringify(formMessageState)}
      <form onSubmit={
        (evt) => {
          evt.preventDefault();
        }
      }>
        <MessageInput value={formMessageState.text} onChange={
          (evt) => {
            setFormMessagestate({ ...formMessageState, text: evt.target.value });
          }
        } />
        <SelectUser users={userListInitialState} />
        <Button type="submit">Envoyer</Button>
      </form>

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
