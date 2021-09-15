import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './UserList.module.scss';
import User from '../User/User'
import store, { initialState } from '../../store/store'

// export const userListInitialState = [
//   {
//     id: 0,
//     nickname: 'heng',
//     avatar: '/img/user.png'
//   },
//   {
//     id: 1,
//     nickname: 'admin',
//     avatar: '/img/admin.png'
//   }
// ];
export const userListInitialState = [];

const UserList = (props) => {
  const [userListState, setUserListstate] = useState(initialState.users);
  // life cycle 
  useEffect(() => {
    // for current state
    setUserListstate(store.getState().tchat.users);
    // for future update
    store.subscribe(() => {
      setUserListstate(store.getState().tchat.users);
    })
  }, [])

  return (
    <div className={styles.UserList} data-testid="UserList">
      UserList
      {/* {JSON.stringify(userListState)} */}
      <div style={{height:'50%', overflowY:'scroll'}}>
      {
        userListState.map((e,i)=>{
          return <User user={e} key={`user-${i}`}/>
        })
      }
      </div>
    </div>
  );
}

UserList.propTypes = {};

UserList.defaultProps = {};

export default UserList;
