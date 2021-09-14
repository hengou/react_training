import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './TemplateName.module.scss';

export const templateNameState = {};

const TemplateName = (props) => {
  const [templateNameState, setTemplateNamestate] = useState(templateNameState);
  
  return (
    <div className={styles.TemplateName} data-testid="TemplateName">
      TemplateName Component
      {JSON.stringify(templateNameState)}
    </div>
  );
}

TemplateName.propTypes = {};

TemplateName.defaultProps = {};

export default TemplateName;
