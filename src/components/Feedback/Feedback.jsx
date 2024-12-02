import styles from './Feedback.module.css';
import React from 'react';

const Feedback = ({ feedback, totalFeedback, positiveFeedback }) => {
  const { good, neutral, bad } = feedback;

  return (
    <div className={styles.feedback}>
      <p className={styles.stat}>Good: {good}</p>
      <p className={styles.stat}>Neutral: {neutral}</p>
      <p className={styles.stat}>Bad: {bad}</p>
      <p className={`${styles.stat} ${styles.total}`}>Total: {totalFeedback}</p>
      <p className={`${styles.stat} ${styles.positive}`}>Positive: {positiveFeedback}%</p>
    </div>
  );
};

export default Feedback;
