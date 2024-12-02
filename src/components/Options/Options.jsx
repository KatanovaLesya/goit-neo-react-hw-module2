import styles from './Options.module.css';
import React from 'react';

const Options = ({ onFeedback, onReset, totalFeedback }) => {
  return (
    <div className={styles.options}>
      <button className={styles.button} onClick={() => onFeedback('good')}>Good</button>
      <button className={styles.button} onClick={() => onFeedback('neutral')}>Neutral</button>
      <button className={styles.button} onClick={() => onFeedback('bad')}>Bad</button>
      {totalFeedback > 0 && (
        <button className={`${styles.button} ${styles.reset}`} onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
