import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './UserAuth.module.scss'
import Button from '../../components/Button/Button';
import SelectUser from '../../components/SelectUser/SelectUser'
import store from '../../store/store';
import { Route, Link } from 'react-router-dom'




class UserAuth extends Component {
  constructor(props) {
    super(props);
    this.state = { userId: null, user: {}, users: store.getState().tchat.users };
  }

  componentDidMount() {
    store.subscribe(() => {
      this.setState({ users: store.getState().tchat.users })
    })
  }

  render() {
    return (
      <div className={styles.UserAuth} >
        <div className={styles.authContainer}>
          <img src={this.state.user ? this.state.user.img : ''} alt='avatar' />
          <SelectUser value={this.state.userId} onChange={
            (evt) => {
              this.setState({
                userId: Number(evt.target.value),
                user: this.state.users.find(e => e.id === Number(evt.target.value))
              });
            }
          } users={this.state.users} />
          <hr />
          <Link to={'/Chat/' + this.state.userId}><Button onClickEvent={() => { }}>Connexion</Button></Link>
          <Button bgColor='green' onClickEvent={() => { }}>Aide</Button>
        </div>

      </div>
    );
  }
}


UserAuth.propTypes = {

};


export default UserAuth;
