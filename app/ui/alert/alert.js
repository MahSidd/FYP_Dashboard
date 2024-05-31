// components/Alert.js
import React from 'react';
import PropTypes from 'prop-types';

const Alert = ({ message, type, onClose }) => {
  const getAlertStyles = (type) => {
    switch (type) {
      case 'success':
        return {
          backgroundColor: '#d4edda',
          color: '#155724',
          border: '1px solid #c3e6cb',
        };
      case 'error':
        return {
          backgroundColor: '#f8d7da',
          color: '#721c24',
          border: '1px solid #f5c6cb',
        };
      case 'warning':
        return {
          backgroundColor: '#fff3cd',
          color: '#856404',
          border: '1px solid #ffeeba',
        };
      case 'info':
        return {
          backgroundColor: '#d1ecf1',
          color: '#0c5460',
          border: '1px solid #bee5eb',
        };
      default:
        return {
          backgroundColor: '#d1ecf1',
          color: '#0c5460',
          border: '1px solid #bee5eb',
        };
    }
  };

  const styles = {
    alert: {
      padding: '15px',
      margin: '10px 0',
      borderRadius: '4px',
      position: 'relative',
      ...getAlertStyles(type),
    },
    closeBtn: {
      position: 'absolute',
      top: '10px',
      right: '10px',
      background: 'transparent',
      border: 'none',
      fontSize: '16px',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.alert}>
      {message}
      <button style={styles.closeBtn} onClick={onClose}>
        &times;
      </button>
    </div>
  );
};

Alert.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['success', 'error', 'warning', 'info']),
  onClose: PropTypes.func.isRequired,
};

export default Alert;
