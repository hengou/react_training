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
        {/* in parent component, pass state value to children's props */}
        <MessageInput value={formMessageState.text} onChange={
          (evt) => {
            // in children component, call function to set the parent's state
            // this is an exmaple which shows how the infos flow on two directions between parent <-> children components
            setFormMessagestate({ ...formMessageState, text: evt.target.value });
          }
        } />
        <SelectUser users={props.users} value={formMessageState.destId} onChange={
          (evt) => {
            setFormMessagestate({...formMessageState, destId: Number(evt.target.value)})
          }
        }/>
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
