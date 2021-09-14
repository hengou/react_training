import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './FormMessage.module.scss';

export const formMessageState = {};

const FormMessage = (props) => {
  const [formMessageState, setFormMessagestate] = useState(formMessageState);
  
  return (
    <div className={styles.FormMessage} data-testid="FormMessage">
      FormMessage Component
      {JSON.stringify(formMessageState)}
    </div>
  );
}

FormMessage.propTypes = {};

FormMessage.defaultProps = {};

export default FormMessage;
